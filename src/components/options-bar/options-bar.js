module.exports = ({ optionsBar, elements, subscriptions, ui, config }) => () => {
    
    const $optionsBar = elements.layout({
        layout: config.options.layout, 
        components: optionsBar.options
    });

    $optionsBar.className = 'options-bar visible-false';

    subscriptions.tags.onFirstInsert(() => {
        ui.toggleBoolClass($optionsBar, 'visible', true);
    });

    return $optionsBar;
    
};
