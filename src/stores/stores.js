module.exports = ({ storage, config }) => () => {

    return config.storage.stores.reduce((acc, name) => {
        const defaults = config.storage.defaults[name];
        const store = storage.stateStore(defaults);
        return Object.assign(acc, { [name]: store });
    }, {});

};
