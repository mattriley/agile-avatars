module.exports = ({ el, tag, elements, services, subscriptions, config }) => tagInstanceId => {

    const $layout = elements.layout({
        layout: config.tags.layout, 
        components: tag.components, 
        componentArgs: [tagInstanceId]
    });
    
    const $tag = el('div').append($layout);

    subscriptions.tagInstances.onChange(tagInstanceId, 'roleId', (roleId, { tagId, mode }) => {
        const isNilRole = services.roles.isNilRole(roleId);
        $tag.className = `tag tag${tagId} role${roleId} nil-role-${isNilRole} ${mode}`;
    });

    return $tag;

};
