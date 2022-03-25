module.exports = ({ el, components, config }) => () => {
    
    const $$shapes = config.options.shapes.map(components.optionsBar.shapeOption);
    return el('span').append(...$$shapes);

};