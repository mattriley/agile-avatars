module.exports = ({ stores }) => tagInstanceId => {

    return stores.tagInstances.getState(tagInstanceId);

};