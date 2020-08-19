module.exports = () => (tags, roleMap) => {
    
    return tags.sort((a, b) => {
        const { roleName: roleNameA } = roleMap[a.roleId];
        const { roleName: roleNameB } = roleMap[b.roleId];
        const roleComparison = roleNameA.localeCompare(roleNameB);
        const nameComparison = a.tagName.localeCompare(b.tagName);
        return roleComparison || nameComparison;
    });
    
};
