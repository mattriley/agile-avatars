module.exports = ({ services, stores }) => (tagInstanceId, roleName) => {

    const roleId = services.roles.findOrInsertRoleWithName(roleName);
    const { tagId } = stores.tagInstances.find(tagInstanceId);
    stores.tags.update(tagId, { roleId });

};
