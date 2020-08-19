module.exports = ({ el, elements, services, subscriptions, config }) => () => {

    const $$options = Object.entries(config.options.sort).map(([value, textContent]) => {
        return el('option', { value, textContent });
    });

    const $keepSorted = el('select')
        .append(...$$options)
        .addEventListener('change', () => {
            services.settings.changeOption('sort', $keepSorted.value);
        });

    subscriptions.settings.options.onChange('sort', sort => {
        $keepSorted.value = sort;
    }).invoke();

    return elements.label('Keep sorted by', $keepSorted);
    
};
