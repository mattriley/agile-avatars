module.exports = ({ stores }) => instanceId => {

    const { tagId, mode } = stores.tagInstances.getState(instanceId);
    const tag = stores.tags.getState(tagId);

    const notThisInstance = id => id !== instanceId;

    stores.tags.setState(tagId, {
        instances: tag.instances.filter(notThisInstance),
        [mode]: tag[mode].filter(notThisInstance)
    });

    stores.tagInstances.remove(instanceId);
    
};
