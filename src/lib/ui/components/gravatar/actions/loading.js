module.exports = ({ el, services, subscriptions, util }) => () => {

    const $loading = el('div', 'loading-indicator lds-dual-ring');

    subscriptions.settings.gravatar.onChange('status', () => {
        util.toggleBoolClass($loading, 'visible', services.gravatar.status.is.working());
    }).invoke();

    return $loading;

};
