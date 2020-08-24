module.exports = ({ el, tagList, services, subscriptions, lib, config, window }) => () => {
    
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
        const { activeElement } = window.document;
        services.tags.sortTagInstances().forEach(tagInstance => {
            const $tag = $$tags.get(tagInstance.id);
            $tag.remove();
            $tags.append($tag);
        });
        activeElement.focus();
    };

    const delayedSort = lib.util.debounce(
        sort, 
        config.debounce.sortTagList
    );

    subscriptions.settings.options.onChange('sort', sort);
    subscriptions.tagInstances.onChangeAny('tagName', delayedSort);
    subscriptions.tagInstances.onChangeAny('roleName', delayedSort);

    return $tags;
    
};
