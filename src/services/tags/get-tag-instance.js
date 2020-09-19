module.exports = ({ stores }) => tagInstanceId => {

    return stores.tagInstances.find(tagInstanceId);

};