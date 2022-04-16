export default ({ el, subscriptions }) => tagId => {

    const $style = el('style');

    subscriptions.tags.onChange(tagId, 'image', image => {
        $style.textContent = image ? `.tag${tagId} .tag-image { background-image: url(${image}); }` : '';
    });

    return $style;

};
