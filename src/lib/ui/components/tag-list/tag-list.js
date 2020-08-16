module.exports = ({ el, tagList, services, subscriptions, util }) => () => {
    
    const $$tags = new Map();

    const $tags = el('div', 'tag-list');
    
    subscriptions.tagInstances.onInsert(instanceId => {
        const $tag = tagList.tag(instanceId);
        $$tags.set(instanceId, $tag);
        $tags.append($tag);        
        delayedSort();
    });

    subscriptions.tagInstances.onBeforeRemove(instanceId => {
        $$tags.get(instanceId).remove();
        $$tags.delete(instanceId);
    });

    const sort = () => {
        services.tags.sortInstances().forEach(instance => {
            const $tag = $$tags.get(instance.id);
            $tag.remove();
            $tags.append($tag);
        });
    };

    const delayedSort = util.debounce(sort, 'sortTagList');

    subscriptions.settings.options.onChange('sort', sort).invoke();
    subscriptions.tagInstances.onChangeAny('tagName', delayedSort);
    subscriptions.tagInstances.onChangeAny('roleName', delayedSort);

    return $tags;
    
};
