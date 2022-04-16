export default ({ stores }) => tagId => () => {

    const { roleId, instances } = stores.tags.find(tagId);
    const { roleName } = stores.roles.find(roleId);
    instances.forEach(id => stores.tagInstances.update(id, { roleId, roleName }));

};
