module.exports = ({ state, lib, config }) => {

    return config.storage.stores.reduce((acc, name) => {
        const store = lib.storage.stateStore(state[name] = {}, config.storage.defaults[name]);
        return Object.assign(acc, { [name]: store });
    }, {});

};
