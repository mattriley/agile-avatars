module.exports = ({ state, lib, config }) => {

    return config.storage.stores.reduce((acc, name) => {
        const localState = state[name] = {};
        const store = lib.storage.stateStore(localState);
        const defaults = Object.entries(config.storage.defaults[name] ?? {}).map(([id, entry]) => ({ id, ...entry }));
        defaults.forEach(entry => store.insert(entry));
        return Object.assign(acc, { [name]: store });
    }, {});

};
