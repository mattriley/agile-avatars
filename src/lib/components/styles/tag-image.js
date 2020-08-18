module.exports = ({ el, subscriptions }) => tagId => {

    const $style = el('style');

    subscriptions.tags.onChange(tagId, 'image', image => {
        $style.textContent = `.tag${tagId} .tag-image { background-image: url(${image}); }`;
    });

    return $style;

};
