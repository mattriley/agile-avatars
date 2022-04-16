export default ({ core, stores }) => () => {

    const sorts = {
        orderAdded: stores.tags.list,
        roleThenName: () => core.tags.sortTagsByRoleThenName(stores.tags.list(), stores.roles.find),
        name: () => core.tags.sortTagsByName(stores.tags.list())
    };

    const { sort } = stores.settings.find('options');
    const tags = sorts[sort]();
    return core.tags.sortTagInstancesByTagThenMode(tags, stores.tagInstances.find);

};
