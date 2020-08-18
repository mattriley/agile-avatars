module.exports = ({ stores }) => tagInstanceId => {

    const { tagId, mode } = stores.tagInstances.getState(tagInstanceId);
    const tag = stores.tags.getState(tagId);

    const notThis = id => id !== tagInstanceId;

    stores.tags.setState(tagId, {
        instances: tag.instances.filter(notThis),
        [mode]: tag[mode].filter(notThis)
    });

    stores.tagInstances.remove(tagInstanceId);
    
};
