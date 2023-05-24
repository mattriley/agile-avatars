export default ({ ui, components, constants }) => () => {

    const $$modes = constants.options.modes.map(components.optionsBar.numberOption);
    return ui.el('span').append(...$$modes);

};
