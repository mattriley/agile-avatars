module.exports = ({ stores }) => tagInstanceData => {

    const { tagId, mode } = tagInstanceData;
    const { tagName, roleId } = stores.tags.getState(tagId);
    const { roleName } = stores.roles.getState(roleId);
    return { tagId, tagName, roleId, roleName, mode };
    
};
