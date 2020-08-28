const storage = require('./storage');

module.exports = ({ lib, config }) => {

    const state = {};
    const stores = storage.stores({ state, lib, config });
    const settings = storage.settings({ stores, config });
    const subscriptions = storage.subscriptions({ stores, settings });
    return { state, stores, settings, subscriptions };

};
