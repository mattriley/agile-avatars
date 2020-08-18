module.exports = ({ services, stores }) => (tagInstanceId, roleName) => {

    const roleId = services.roles.findOrInsertRoleWithName(roleName);
    const { tagId } = stores.tagInstances.getState(tagInstanceId);
    stores.tags.setState(tagId, { roleId });

};