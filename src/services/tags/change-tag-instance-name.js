module.exports = ({ core, services, stores }) => (tagInstanceId, expression) => {

    const { tagId } = services.tags.getTagInstance(tagInstanceId);
    const { tagName, roleName } = core.tags.parseTagExpression(expression);

    stores.tags.setState(tagId, { tagName });

    if (roleName) {
        const roleId = services.roles.findOrInsertRoleWithName(roleName);
        stores.tags.setState(tagId, { roleId });
    }
    
};
