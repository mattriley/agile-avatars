const EventEmitter = require('events');

module.exports = () => localState => {
    let nextId = 1;
    const funcIndex = {};
    const collectionEmitter = new EventEmitter();

    const manage = id => funcIndex[id] ?? { getState: () => null };
    const getMap = () => localState;
    const getArray = () => Object.values(localState);
    const getState = id => manage(id).getState();
    const setState = (id, changes) => manage(id).setState(changes);

    const onChange = (id, key, listener) => manage(id).subscriptions.onChange(key, listener);
    const onChangeAny = (key, listener) => collectionEmitter.on(key, listener);
    const onInsert = listener => collectionEmitter.on('insert', listener);
    const onFirstInsert = listener => collectionEmitter.once('firstInsert', listener);
    const onBeforeRemove = listener => collectionEmitter.on('beforeRemove', listener);
    const subscriptions = { onChange, onChangeAny, onInsert, onFirstInsert, onBeforeRemove };

    const insert = (data, callback) => {
        const id = nextId++;
        const state = { id, ...data };
        const itemEmitter = new EventEmitter();

        const getState = () => ({ ...state });

        const setState = changes => {
            Object.entries(changes).forEach(([key, val]) => {
                state[key] = val;
                const emit = emitter => emitter.emit(key, state[key], state);
                [itemEmitter, collectionEmitter].forEach(emit);
            });
        };

        const onChange = (key, listener) => {
            itemEmitter.on(key, listener);
            const invoke = () => listener(state[key], state);
            return { invoke };
        };

        const subscriptions = { onChange };
        localState[id] = state;  
        funcIndex[id] = { getState, setState, subscriptions };

        if (callback) callback(id);
        collectionEmitter.emit('firstInsert', id);
        collectionEmitter.emit('insert', id);
        return id;
    };

    const remove = id => {
        collectionEmitter.emit('beforeRemove', id);
        delete funcIndex[id];
        delete localState[id];
    };

    return { manage, insert, remove, getMap, getArray, getState, setState, subscriptions };

};
