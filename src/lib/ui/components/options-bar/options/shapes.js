module.exports = ({ el, optionsBar, config }) => () => {
    
    const $$shapes = config.options.shapes.map(optionsBar.elements.shapeOption);
    return el('span').append(...$$shapes);

};