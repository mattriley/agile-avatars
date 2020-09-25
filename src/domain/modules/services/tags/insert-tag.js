module.exports = ({ core, services, stores, subscriptions, util }) => tagData => {

    const assignRoleId = ({ roleName, ...tagData }) => {
        const roleId = tagData.roleId ?? services.roles.findOrInsertRoleWithName(roleName);
        return { roleId, ...tagData };
    };

    const insertTag = tag => {
        return stores.tags.insert(tag, tagId => {
            subscriptions.tags.onChange(tagId, 'tagName', services.tags.setupTagPropagation(tagId));
            subscriptions.tags.onChange(tagId, 'roleId', services.tags.setupRolePropagation(tagId));
        });
    };

    return util.pipe(assignRoleId, core.tags.buildTag, insertTag)(tagData ?? {});

};
