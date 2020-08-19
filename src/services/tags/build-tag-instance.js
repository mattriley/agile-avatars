module.exports = ({ stores }) => tagInstanceData => {

    const { tagId } = tagInstanceData;
    const { tagName, roleId } = stores.tags.getState(tagId);
    const { roleName } = stores.roles.getState(roleId);
    return { ...tagInstanceData, tagName, roleId, roleName };

    
};
