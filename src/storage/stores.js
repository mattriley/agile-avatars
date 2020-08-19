module.exports = ({ storage, config }) => ({ state }) => {

    return config.storage.stores.reduce((acc, name) => {
        const localState = state[name] = {};
        const entry = { [name]: storage.stateStore(localState) };
        return Object.assign(acc, entry);
    }, {});

};
