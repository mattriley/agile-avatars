export default ({ ui, subscriptions }) => tagId => {

    const $style = ui.el('style');

    subscriptions.tags.onChange(tagId, 'image', image => {
        $style.textContent = image ? `.tag${tagId} .tag-image { background-image: url(${image}); }` : '';
    });

    return $style;

};
