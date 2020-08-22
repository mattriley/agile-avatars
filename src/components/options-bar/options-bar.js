module.exports = ({ optionsBar, elements, subscriptions, lib, config }) => () => {
    
    const $optionsBar = elements.layout({
        layout: config.options.layout, 
        components: optionsBar.options
    });

    $optionsBar.className = 'options-bar visible-false';

    subscriptions.tags.onFirstInsert(() => {
        lib.ui.toggleBoolClass($optionsBar, 'visible', true);
    });

    return $optionsBar;
    
};
