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
        lib.ui.refocusActiveElement(window, () => {
            services.tags.sortTagInstances().forEach(tagInstance => {
                $tags.append($$tags.get(tagInstance.id));
            });
        });
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

/* FOOTNOTES

Sort is achieved by "re-appending" tag elements in the new order.
If the active (focused) element is re-appended, focus is lost.
lib.refocusActiveElement ensures focus is maintained.

*/