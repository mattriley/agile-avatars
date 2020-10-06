module.exports = ({ el, services, subscriptions, dom }) => () => {

    const $loading = el('div', 'loading-indicator lds-dual-ring');

    subscriptions.settings.onChange('gravatar', 'status', () => {
        dom.toggleBoolClass($loading, 'visible', services.gravatar.status.is.working());
    });

    return $loading;

};
