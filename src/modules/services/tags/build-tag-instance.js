export default ({ stores }) => tagInstanceData => {

    const { tagId, mode } = tagInstanceData;
    const { tagName, roleId } = stores.tags.find(tagId);
    const { roleName } = stores.roles.find(roleId);
    return { tagId, tagName, roleId, roleName, mode };

};
