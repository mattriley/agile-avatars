module.exports = ({ lib, config }) => {

    return config.storage.stores.reduce((acc, name) => {
        const state = acc.state[name] = {};
        const defaults = config.storage.defaults[name];
        const { subscriptions, ...store } = lib.storage.stateStore(state, defaults);
        acc.subscriptions[name] = subscriptions;
        acc.stores[name] = store;        
        return acc;
    }, { state: {}, stores: {}, subscriptions: {} });

};
