module.exports = ({ el, elements, services, subscriptions }) => () => {
    
    const $showOutline = el('input', { type: 'checkbox' })
        .addEventListener('change', () => {
            services.settings.changeOption('outline', $showOutline.checked);
        });

    subscriptions.settings.options.onChange('outline', outline => {
        $showOutline.checked = outline;
    }).invoke();

    return elements.label($showOutline, 'Show outline');

};
