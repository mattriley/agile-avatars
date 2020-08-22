module.exports = ({ lib, config }) => ({ state }) => {

    return config.storage.stores.reduce((acc, name) => {
        const localState = state[name] = {};
        const entry = { [name]: lib.storage.stateStore(localState) };
        return Object.assign(acc, entry);
    }, {});

};
