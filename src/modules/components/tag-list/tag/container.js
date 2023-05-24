export default ({ ui, components, elements, services, subscriptions, constants }) => tagInstanceId => {

    const $layout = elements.layout({
        layout: constants.tags.layout,
        components: components.tagList.tag.components,
        componentArgs: [tagInstanceId]
    });

    const $tag = ui.el('div').append($layout);

    subscriptions.tagInstances.onChange(tagInstanceId, 'roleId', (roleId, { tagId, mode }) => {
        const isNilRole = services.roles.isNilRole(roleId);
        $tag.className = `tag tag${tagId} role${roleId} nil-role-${isNilRole} ${mode}`;
    });

    return $tag;

};
