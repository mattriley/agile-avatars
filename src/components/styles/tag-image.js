module.exports = ({ el, subscriptions }) => () => {

    const $styles = el('div');

    subscriptions.tags.onInsert(tagId => {
        const $style = el('style');

        subscriptions.tags.onChange(tagId, 'image', image => {
            if (!image) return;
            $style.textContent = `.tag${tagId} .tag-image { background-image: url(${image}); }`;
        });
    
        $styles.append($style);
    });

    return $styles;    

};
