export default ({ storage, constants }) => () => {

    return Object.fromEntries(constants.storage.stores.map(name => {
        const defaults = constants.storage.defaults[name];
        const store = storage.stateStore(defaults);
        return [name, store];
    }));

};
