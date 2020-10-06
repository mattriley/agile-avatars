module.exports = ({ optionsBar, elements, subscriptions, dom, config }) => () => {
    
    const $optionsBar = elements.layout({
        layout: config.options.layout, 
        components: optionsBar.options
    });

    $optionsBar.className = 'options-bar visible-false';

    subscriptions.tags.onFirstInsert(() => {
        dom.toggleBoolClass($optionsBar, 'visible', true);
    });

    return $optionsBar;
    
};
