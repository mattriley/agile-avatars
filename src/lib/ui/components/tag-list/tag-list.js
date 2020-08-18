module.exports = ({ el, tagList, services, subscriptions, util }) => () => {
    
    const $$tags = new Map();

    const $tags = el('div', 'tag-list');
    
    subscriptions.tagInstances.onInsert(tagInstanceId => {
        const $tag = tagList.tag(tagInstanceId);
        $$tags.set(tagInstanceId, $tag);
        $tags.append($tag);        
        delayedSort();
    });

    subscriptions.tagInstances.onBeforeRemove(tagInstanceId => {
        $$tags.get(tagInstanceId).remove();
        $$tags.delete(tagInstanceId);
    });

    const sort = () => {
        services.tags.sortInstances().forEach(tagInstance => {
            const $tag = $$tags.get(tagInstance.id);
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
