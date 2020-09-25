module.exports = ({ el, subscriptions }) => () => {

    const $style = el('style');

    subscriptions.settings.onChange('options', 'spacing', spacing => {
        $style.textContent = `.tag-list { gap: ${spacing}px; }`;
    });

    return $style;
    
};
