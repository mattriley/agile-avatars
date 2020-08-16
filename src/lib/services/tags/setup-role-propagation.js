module.exports = ({ stores }) => tagId => () => {

    const { roleId, instances } = stores.tags.getState(tagId);
    const { roleName } = stores.roles.getState(roleId);
    const changes = { roleId, roleName };
    instances.forEach(id => stores.tagInstances.setState(id, changes));
    
};
