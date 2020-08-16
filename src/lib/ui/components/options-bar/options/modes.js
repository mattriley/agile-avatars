module.exports = ({ el, optionsBar, config }) => () => {

    const $$modes = config.options.modes.map(optionsBar.elements.numberOption);
    return el('span').append(...$$modes);
    
};
