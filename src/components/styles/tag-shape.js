module.exports = ({ el, subscriptions, config }) => () => {

    const $style = el('style');

    subscriptions.settings.options.onChange('shape', shape => {
        const borderRadius = config.options.shapeRadius[shape];
        $style.textContent = `.tag-image { border-radius: ${borderRadius}%; }`;
    }).invoke();

    return $style;
    
};
