module.exports = ({ el, subscriptions }) => () => {

    const $style = el('style');

    subscriptions.settings.options.onChange('outline', outline => {
        $style.textContent = outline ? '' : '.tag { border-color: transparent; }';
    });

    return $style;
    
};
