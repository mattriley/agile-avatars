module.exports = ({ el, subscriptions, services, util, config }) => shapeName => {
    
    const $shape = el('span', 'shape-option', {
        title: `Change shape to ${shapeName}`
    }).addEventListener('click', () => {
        services.settings.changeOption('shape', shapeName);
    });

    const borderRadius = config.options.shapeRadius[shapeName] ?? 0;
    $shape.style.borderRadius = `${borderRadius}%`;

    subscriptions.settings.options.onChange('shape', selectedShape => {
        util.toggleBoolClass($shape, 'selected', shapeName === selectedShape);
    }).invoke();

    return $shape;
    
};
