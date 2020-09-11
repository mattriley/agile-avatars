const storage = require('./storage');

module.exports = ({ lib, config }) => {

    const state = {};
    const stores = storage.stores({ state, lib, config });
    const subscriptions = storage.subscriptions({ stores });
    return { state, stores, subscriptions };

};
