export default ({ ui, subscriptions, config }) => () => {

    const $style = ui.el('style');

    subscriptions.settings.onChange('options', 'shape', shape => {
        const borderRadius = config.options.shapeRadius[shape];
        $style.textContent = `.tag-image { border-radius: ${borderRadius}%; }`;
    });

    return $style;

};
