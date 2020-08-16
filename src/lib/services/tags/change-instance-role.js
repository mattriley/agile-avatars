module.exports = ({ services, stores }) => (instanceId, roleName) => {

    const roleId = services.roles.findOrInsertRoleWithName(roleName);
    const { tagId } = stores.tagInstances.getState(instanceId);
    stores.tags.setState(tagId, { roleId });

};