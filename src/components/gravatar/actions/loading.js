module.exports = ({ el, services, subscriptions, lib }) => () => {

    const $loading = el('div', 'loading-indicator lds-dual-ring');

    subscriptions.settings.gravatar.onChange('status', () => {
        lib.ui.toggleBoolClass($loading, 'visible', services.gravatar.status.is.working());
    });

    return $loading;

};
