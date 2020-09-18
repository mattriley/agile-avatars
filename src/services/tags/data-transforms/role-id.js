module.exports = ({ services }) => ({ roleName, ...tagData }) => {

    const roleId = tagData.roleId ?? services.roles.findOrInsertRoleWithName(roleName);
    return { ...tagData, roleId };
        
};
