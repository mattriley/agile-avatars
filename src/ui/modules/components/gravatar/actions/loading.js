module.exports = ({ el, services, subscriptions, lib }) => () => {

    const $loading = el('div', 'loading-indicator lds-dual-ring');

    subscriptions.settings.onChange('gravatar', 'status', () => {
        lib.toggleBoolClass($loading, 'visible', services.gravatar.status.is.working());
    });

    return $loading;

};
