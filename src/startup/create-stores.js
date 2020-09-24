module.exports = ({ lib, util, config }) => {

    const { stores, subscriptions } = config.storage.stores.reduce((acc, name) => {
        const defaults = config.storage.defaults[name];
        const { subscriptions, ...store } = lib.storage.stateStore(defaults);
        acc.subscriptions[name] = subscriptions;
        acc.stores[name] = store;    
        return acc;
    }, { stores: {}, subscriptions: {} });

    const getState = () => util.mapValues(stores, store => store.list());

    return { stores, subscriptions, getState };

};
