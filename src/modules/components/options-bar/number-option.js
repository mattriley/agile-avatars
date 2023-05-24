export default ({ elements, services, subscriptions, util, constants }) => optionName => {

    const { min, max, step } = constants.options[optionName];

    const $number = elements.number({ min, max, step })
        .addEventListener('change', e => {
            services.settings.changeOption(optionName, parseInt(e.target.value));
        });

    subscriptions.settings.onChange('options', optionName, val => {
        $number.value = val;
    });

    const labelText = util.upperFirst(optionName);
    return elements.label(labelText, $number);

};
