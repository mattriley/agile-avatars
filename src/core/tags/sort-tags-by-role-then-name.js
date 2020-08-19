module.exports = () => (tags, getRole) => {
    
    return tags.sort((a, b) => {
        const { roleName: roleNameA } = getRole(a.roleId);
        const { roleName: roleNameB } = getRole(b.roleId);
        const roleComparison = roleNameA.localeCompare(roleNameB);
        const nameComparison = a.tagName.localeCompare(b.tagName);
        return roleComparison || nameComparison;
    });
    
};
