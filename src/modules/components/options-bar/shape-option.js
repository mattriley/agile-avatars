export default ({ ui, subscriptions, services, constants }) => shapeName => {

    const $shape = ui.el('span', 'shape-option', {
        title: `Change shape to ${shapeName}`,
        tabIndex: 0
    }).addEventListener('click', () => {
        services.settings.changeOption('shape', shapeName);
    }).addEventListener('keydown', e => {
        if (['Enter', 'Space'].includes(e.code)) {
            $shape.click();
            e.preventDefault();
        }
    });

    const borderRadius = constants.options.shapeRadius[shapeName] || 0;
    $shape.style.borderRadius = `${borderRadius}%`;

    subscriptions.settings.onChange('options', 'shape', selectedShape => {
        ui.toggleBoolClass($shape, 'selected', shapeName === selectedShape);
    });

    return $shape;

};
