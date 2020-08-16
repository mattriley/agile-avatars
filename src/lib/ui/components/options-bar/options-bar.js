module.exports = ({ optionsBar, elements, subscriptions, util, config }) => () => {
    
    const $optionsBar = elements.layout({
        layout: config.options.layout, 
        components: optionsBar.options
    });

    $optionsBar.className = 'options-bar visible-false';

    subscriptions.tags.onFirstInsert(() => {
        util.toggleBoolClass($optionsBar, 'visible', true);
    });

    return $optionsBar;
    
};
