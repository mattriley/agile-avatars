export default ({ ui, components, services, subscriptions, util, constants }) => () => {

    const $$tags = new Map();

    const $tags = ui.el('div', 'tag-list');

    subscriptions.tagInstances.onInsert(tagInstanceId => {
        const $tag = components.tagList.tag.container(tagInstanceId);
        $$tags.set(tagInstanceId, $tag);
        $tags.append($tag);
        delayedSort();
    });

    subscriptions.tagInstances.onBeforeRemove(tagInstanceId => {
        $$tags.get(tagInstanceId).remove();
        $$tags.delete(tagInstanceId);
    });

    const sort = () => {
        ui.refocus(() => {
            services.tags.sortTagInstances().forEach(tagInstance => {
                $tags.append($$tags.get(tagInstance.id));
            });
        });
    };

    const delayedSort = util.debounce(
        sort,
        constants.debounce.sortTagList
    );

    subscriptions.settings.onChange('options', 'sort', sort);
    subscriptions.tagInstances.onChangeAny('tagName', delayedSort);
    subscriptions.tagInstances.onChangeAny('roleName', delayedSort);

    return $tags;

};
