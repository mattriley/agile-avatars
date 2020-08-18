module.exports = () => (tagInstanceData, tagMap, roleMap) => {
    
    const { tagId } = tagInstanceData;
    const { tagName, roleId } = tagMap[tagId];
    const { roleName } = roleMap[roleId];
    return { ...tagInstanceData, tagName, roleId, roleName };

};
