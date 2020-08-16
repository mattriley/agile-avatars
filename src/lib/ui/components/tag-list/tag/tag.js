module.exports = ({ el, tag, elements, services, subscriptions, config }) => instanceId => {

    const $layout = elements.layout({
        layout: config.tags.layout, 
        components: tag.elements, 
        componentArgs: [instanceId]
    });
    
    const $tag = el('div').append($layout);

    subscriptions.tagInstances.onChange(instanceId, 'roleId', (roleId, { tagId, mode }) => {
        const isNilRole = services.roles.isNilRole(roleId);
        $tag.className = `tag tag${tagId} role${roleId} nil-role-${isNilRole} ${mode}`;
    }).invoke();

    return $tag;

};
