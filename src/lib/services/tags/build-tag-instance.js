module.exports = ({ core, stores }) => tagInstanceData => {

    const tagMap = stores.tags.getMap();
    const roleMap = stores.roles.getMap();
    return core.tags.expandInstanceData(tagInstanceData, tagMap, roleMap);
    
};
