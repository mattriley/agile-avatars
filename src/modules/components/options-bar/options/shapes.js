export default ({ ui, components, constants }) => () => {

    const $$shapes = constants.options.shapes.map(components.optionsBar.shapeOption);
    return ui.el('span').append(...$$shapes);

};
