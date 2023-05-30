export default ({ ui, components, config }) => () => {

    const $$modes = config.options.modes.map(components.optionsBar.numberOption);
    return ui.el('span').append(...$$modes);

};
