const upperFirst = require('lodash/upperFirst');

module.exports = ({ elements, services, subscriptions, config }) => optionName => {

    const { min, max, step } = config.options[optionName];

    const $number = elements.number({ min, max, step })
        .addEventListener('input', e => {
            services.settings.changeOption(optionName, e.target.value);
        });

    subscriptions.settings.options.onChange(optionName, val => {
        $number.value = val;
    });

    const labelText = upperFirst(optionName);
    return elements.label(labelText, $number);

};
