module.exports = ({ stores }) => tagInstanceId => {

    const { tagId, mode } = stores.tagInstances.find(tagInstanceId);
    const tag = stores.tags.find(tagId);

    const notThis = id => id !== tagInstanceId;

    stores.tags.update(tagId, {
        instances: tag.instances.filter(notThis),
        [mode]: tag[mode].filter(notThis)
    });

    stores.tagInstances.remove(tagInstanceId);
    
};
