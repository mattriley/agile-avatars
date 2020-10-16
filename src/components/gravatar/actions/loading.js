module.exports = ({ el, services, subscriptions, ui }) => () => {

    const $loading = el('div', 'loading-indicator lds-dual-ring');

    subscriptions.settings.onChange('gravatar', 'status', () => {
        ui.toggleBoolClass($loading, 'visible', services.gravatar.status.is.working());
    });

    return $loading;

};
