module.exports = ({ services, stores }) => instanceData => {

    const instance = services.tags.buildInstance(instanceData);
    const { tagId, mode } = instance;
    const tag = stores.tags.getState(tagId);

    const instanceId = stores.tagInstances.insert(instance, instanceId => {
        stores.tags.setState(tagId, {
            instances: tag.instances.concat(instanceId),
            [mode]: tag[mode].concat(instanceId)
        });
    });
    
    return instanceId;

};
