export default ({ ui, services, subscriptions }) => () => {

    const $loading = ui.el('div', 'loading-indicator lds-dual-ring');

    subscriptions.settings.onChange('gravatar', 'status', () => {
        ui.toggleBoolClass($loading, 'visible', services.gravatar.status.is.working());
    });

    return $loading;

};
