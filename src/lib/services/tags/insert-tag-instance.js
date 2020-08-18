module.exports = ({ services, stores }) => tagInstanceData => {

    const tagInstance = services.tags.buildTagInstance(tagInstanceData);
    const { tagId, mode } = tagInstance;
    const tag = stores.tags.getState(tagId);

    const tagInstanceId = stores.tagInstances.insert(tagInstance, tagInstanceId => {
        stores.tags.setState(tagId, {
            instances: tag.instances.concat(tagInstanceId),
            [mode]: tag[mode].concat(tagInstanceId)
        });
    });
    
    return tagInstanceId;

};
