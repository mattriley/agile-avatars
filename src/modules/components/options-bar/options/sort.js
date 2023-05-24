export default ({ ui, elements, services, subscriptions, constants }) => () => {

    const $$options = Object.entries(constants.options.sort).map(([value, textContent]) => {
        return ui.el('option', { value, textContent });
    });

    const $keepSorted = ui.el('select')
        .append(...$$options)
        .addEventListener('change', () => {
            services.settings.changeOption('sort', $keepSorted.value);
        });

    subscriptions.settings.onChange('options', 'sort', sort => {
        $keepSorted.value = sort;
    });

    return elements.label('Keep sorted by', $keepSorted);

};
