module.exports = ({ stores }) => instanceId => {

    return stores.tagInstances.getState(instanceId);

};