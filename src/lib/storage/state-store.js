const EventEmitter = require('events');

module.exports = state => {
    let nextId = 1;
    const operations = {};
    const collectionEmitter = new EventEmitter();

    const manage = id => operations[id] ?? { getState: () => null };
    const getArray = () => Object.values(state);
    const getState = id => manage(id).getState();
    const setState = (id, changes) => manage(id).setState(changes);

    const onChange = (id, key, listener) => manage(id).subscriptions.onChange(key, listener);
    const onChangeAny = (key, listener) => collectionEmitter.on(`change:${key}`, listener);
    const onInsert = listener => collectionEmitter.on('insert', listener);
    const onFirstInsert = listener => collectionEmitter.once('firstInsert', listener);
    const onBeforeRemove = listener => collectionEmitter.on('beforeRemove', listener);
    const subscriptions = { onChange, onChangeAny, onInsert, onFirstInsert, onBeforeRemove };

    const insert = (data, callback) => {
        const id = nextId++;
        const item = { id, ...data };
        const itemEmitter = new EventEmitter();

        const getState = () => ({ ...item });

        const setState = changes => {
            Object.entries(changes).forEach(([key, val]) => {
                if (item[key] === val) return;
                item[key] = val;
                const emit = emitter => emitter.emit(`change:${key}`, item[key], item);
                [itemEmitter, collectionEmitter].forEach(emit);
            });
        };

        const onChange = (key, listener) => {
            itemEmitter.on(`change:${key}`, listener);
            const invoke = () => listener(item[key], item);
            invoke();
        };

        const subscriptions = { onChange };
        state[id] = item;  
        operations[id] = { getState, setState, subscriptions };

        if (callback) callback(id);
        collectionEmitter.emit('firstInsert', id);
        collectionEmitter.emit('insert', id);
        return id;
    };

    const remove = id => {
        collectionEmitter.emit('beforeRemove', id);
        delete operations[id];
        delete state[id];
    };

    return { manage, insert, remove, getArray, getState, setState, subscriptions };

};

