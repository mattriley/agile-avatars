module.exports = ({ stores, util }) => () => {

    return util.mapValues(stores, store => store.subscriptions);

};
