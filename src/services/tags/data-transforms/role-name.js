module.exports = ({ services, stores }) => tagData => {

    const roleId = tagData.roleId ? tagData.roleId : services.roles.findOrInsertRoleWithName(tagData.roleName);
    const { roleName } = stores.roles.getState(roleId);
    return { ...tagData, roleId, roleName };
        
};
