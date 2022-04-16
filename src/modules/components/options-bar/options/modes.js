export default ({ el, components, config }) => () => {

    const $$modes = config.options.modes.map(components.optionsBar.numberOption);
    return el('span').append(...$$modes);

};
