export default ({ stores }) => tagInstanceId => {

    return stores.tagInstances.find(tagInstanceId);

};
