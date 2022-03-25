module.exports = ({ el, subscriptions, config }) => () => {

    const $style = el('style');

    subscriptions.settings.onChange('options', 'shape', shape => {
        const borderRadius = config.options.shapeRadius[shape];
        $style.textContent = `.tag-image { border-radius: ${borderRadius}%; }`;
    });

    return $style;
    
};
