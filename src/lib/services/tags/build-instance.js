module.exports = ({ core, stores }) => instanceData => {

    const tagMap = stores.tags.getMap();
    const roleMap = stores.roles.getMap();
    return core.tags.expandInstanceData(instanceData, tagMap, roleMap);
    
};
