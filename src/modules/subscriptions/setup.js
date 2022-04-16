export default ({ stores, util }) => () => {

    return util.mapValues(stores, store => store.subscriptions);

};
