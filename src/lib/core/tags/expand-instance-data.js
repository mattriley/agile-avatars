module.exports = () => (instanceData, tagMap, roleMap) => {
    
    const { tagId } = instanceData;
    const { tagName, roleId } = tagMap[tagId];
    const { roleName } = roleMap[roleId];
    return { ...instanceData, tagName, roleId, roleName };

};
