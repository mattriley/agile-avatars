module.exports = ({ elements, services, subscriptions, lib, config }) => optionName => {

    const { min, max, step } = config.options[optionName];

    const $number = elements.number({ min, max, step })
        .addEventListener('input', e => {
            services.settings.changeOption(optionName, e.target.value);
        });

    subscriptions.settings.onChange('options', optionName, val => {
        $number.value = val;
    });

    const labelText = lib.util.upperFirst(optionName);
    return elements.label(labelText, $number);

};
