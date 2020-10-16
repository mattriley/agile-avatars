module.exports = ({ el, tagList, services, subscriptions, ui, util, config }) => () => {
    
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
        const $active = ui.getDocument().activeElement;
        services.tags.sortTagInstances().forEach(tagInstance => {
            $tags.append($$tags.get(tagInstance.id));
        });
        $active.focus();
    };

    const delayedSort = util.debounce(
        sort, 
        config.debounce.sortTagList
    );

    subscriptions.settings.onChange('options', 'sort', sort);
    subscriptions.tagInstances.onChangeAny('tagName', delayedSort);
    subscriptions.tagInstances.onChangeAny('roleName', delayedSort);

    return $tags;
    
};
