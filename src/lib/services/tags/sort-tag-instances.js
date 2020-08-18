module.exports = ({ core, settings, stores }) => () => {
    
    const sorts = {
        orderAdded: stores.tags.getArray,
        roleThenName: () => core.tags.sortTagsByRoleThenName(stores.tags.getArray(), stores.roles.getMap()),
        name: () => core.tags.sortTagsByName(stores.tags.getArray())
    };

    const { sort } = settings.options.getState();
    const tags = sorts[sort]();
    const tagInstanceMap = stores.tagInstances.getMap();
    return core.tags.sortTagInstancesByTagThenMode(tags, tagInstanceMap);

};
