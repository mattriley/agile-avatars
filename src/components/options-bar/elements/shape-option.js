module.exports = ({ el, subscriptions, services, dom, config }) => shapeName => {
    
    const $shape = el('span', 'shape-option', {
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

    const borderRadius = config.options.shapeRadius[shapeName] ?? 0;
    $shape.style.borderRadius = `${borderRadius}%`;

    subscriptions.settings.onChange('options', 'shape', selectedShape => {
        dom.toggleBoolClass($shape, 'selected', shapeName === selectedShape);
    });

    return $shape;
    
};
