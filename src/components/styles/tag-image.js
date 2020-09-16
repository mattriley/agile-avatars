module.exports = ({ el, subscriptions }) => () => {

    const $styles = el('div');

    subscriptions.tags.onInsert(tagId => {
        const $style = el('style');

        subscriptions.tags.onChange(tagId, 'image', image => {
            $style.textContent = image ? `.tag${tagId} .tag-image { background-image: url(${image}); }` : '';
        });
    
        $styles.append($style);
    });

    return $styles;    

};
