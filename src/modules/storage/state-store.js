const EventEmitter = require('events');

module.exports = (defaults = {}) => {
    let nextId = 1;
    const state = new Map();
    const funcs = new Map();
    const collectionEmitter = new EventEmitter();

    const manage = id => funcs.get(id) || { get: () => null };
    const list = () => [...state.values()];
    const find = id => manage(id).get();
    const update = (id, changes) => manage(id).update(changes);

    const onChange = (id, field, listener) => manage(id).subscriptions.onChange(field, listener);
    const onChangeAny = (field, listener) => collectionEmitter.on(`change:${field}`, listener);
    const onInsert = listener => collectionEmitter.on('insert', listener);
    const onFirstInsert = listener => collectionEmitter.once('firstInsert', listener);
    const onBeforeRemove = listener => collectionEmitter.on('beforeRemove', listener);
    const subscriptions = { onChange, onChangeAny, onInsert, onFirstInsert, onBeforeRemove };

    const insert = (data, callback) => {
        const id = data.id || nextId++;
        const item = { id, ...data };
        const itemEmitter = new EventEmitter();

        const get = () => ({ ...item });

        const update = changes => {
            Object.entries(changes).forEach(([field, val]) => {
                if (item[field] === val) return;
                item[field] = val;
                const emit = emitter => emitter.emit(`change:${field}`, item[field], item);
                [itemEmitter, collectionEmitter].forEach(emit);
            });
        };

        const onChange = (field, listener) => {
            itemEmitter.on(`change:${field}`, listener);
            listener(item[field], item);
        };

        const subscriptions = { onChange };
        funcs.set(id, { get, update, subscriptions });
        state.set(id, item);

        if (callback) callback(id);
        collectionEmitter.emit('firstInsert', id);
        collectionEmitter.emit('insert', id);
        return id;
    };

    const remove = id => {
        collectionEmitter.emit('beforeRemove', id);
        funcs.delete(id);
        state.delete(id);
    };

    Object.entries(defaults).map(([id, entry]) => ({ id, ...entry })).forEach(entry => insert(entry));

    return { insert, remove, list, find, update, subscriptions };

};

