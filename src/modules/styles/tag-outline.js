export default ({ ui, subscriptions }) => () => {

    const $style = ui.el('style');

    subscriptions.settings.onChange('options', 'outline', outline => {
        $style.textContent = outline ? '' : '.tag { border-color: transparent; }';
    });

    return $style;

};
