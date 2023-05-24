export default ({ ui, subscriptions, constants }) => () => {

    const $style = ui.el('style');

    subscriptions.settings.onChange('options', 'shape', shape => {
        const borderRadius = constants.options.shapeRadius[shape];
        $style.textContent = `.tag-image { border-radius: ${borderRadius}%; }`;
    });

    return $style;

};
