export default ({ ui, components, config }) => () => {

    const $$shapes = config.options.shapes.map(components.optionsBar.shapeOption);
    return ui.el('span').append(...$$shapes);

};
