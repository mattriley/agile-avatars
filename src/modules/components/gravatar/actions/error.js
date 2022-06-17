export default ({ ui, services, subscriptions }) => () => {

    const $errorMessage = ui.el('div', 'error-message');

    const $dismiss = ui.el('a', 'dismiss', { textContent: 'Dismiss' })
        .addEventListener('click', services.gravatar.status.to.ready);

    const $error = ui.el('div', 'error').append($errorMessage, $dismiss);

    subscriptions.settings.onChange('gravatar', 'status', () => {
        ui.toggleBoolClass($error, 'visible', services.gravatar.status.is.error());
    });

    subscriptions.settings.onChange('gravatar', 'errorMessage', errorMessage => {
        $errorMessage.textContent = errorMessage;
    });

    return $error;

};
