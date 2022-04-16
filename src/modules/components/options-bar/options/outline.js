export default ({ el, elements, services, subscriptions }) => () => {

    const $showOutline = el('input', { type: 'checkbox' })
        .addEventListener('change', () => {
            services.settings.changeOption('outline', $showOutline.checked);
        });

    subscriptions.settings.onChange('options', 'outline', outline => {
        $showOutline.checked = outline;
    });

    return elements.label($showOutline, 'Show outline');

};
