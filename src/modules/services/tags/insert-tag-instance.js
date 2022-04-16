export default ({ services, stores }) => tagInstanceData => {

    const tagInstance = services.tags.buildTagInstance(tagInstanceData);

    return stores.tagInstances.insert(tagInstance, tagInstanceId => {
        const { tagId, mode } = tagInstance;
        const tag = stores.tags.find(tagId);

        stores.tags.update(tagId, {
            instances: tag.instances.concat(tagInstanceId),
            [mode]: tag[mode].concat(tagInstanceId)
        });
    });

};
