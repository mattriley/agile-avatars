module.exports = ({ storage }) => {

    const state = {};
    const stores = storage.stores({ state });
    const settings = storage.settings({ stores });
    const subscriptions = storage.subscriptions({ stores, settings });
    return { state, stores, settings, subscriptions };

};
