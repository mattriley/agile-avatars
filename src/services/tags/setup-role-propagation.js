module.exports = ({ stores }) => tagId => () => {

    const { roleId, instances } = stores.tags.find(tagId);
    const { roleName } = stores.roles.find(roleId);
    const changes = { roleId, roleName };
    instances.forEach(id => stores.tagInstances.update(id, changes));
    
};
