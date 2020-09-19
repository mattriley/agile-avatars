module.exports = ({ services, stores }) => tagInstanceData => {

    const tagInstance = services.tags.buildTagInstance(tagInstanceData);
    const { tagId, mode } = tagInstance;
    const tag = stores.tags.find(tagId);

    const tagInstanceId = stores.tagInstances.insert(tagInstance, tagInstanceId => {
        stores.tags.update(tagId, {
            instances: tag.instances.concat(tagInstanceId),
            [mode]: tag[mode].concat(tagInstanceId)
        });
    });
    
    return tagInstanceId;

};
