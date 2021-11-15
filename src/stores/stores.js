module.exports = ({ storage, config }) => () => {

    return Object.fromEntries(config.storage.stores.map(name => {
        const defaults = config.storage.defaults[name];
        const store = storage.stateStore(defaults);
        return [name, store];
    }));

};
