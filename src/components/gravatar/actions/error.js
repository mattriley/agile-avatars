module.exports = ({ el, services, subscriptions, lib }) => () => {

    const $errorMessage = el('div', 'error-message');
    
    const $dismiss = el('a', 'dismiss', { textContent: 'Dismiss' })
        .addEventListener('click', services.gravatar.status.to.ready);

    const $error = el('div', 'error').append($errorMessage, $dismiss);
    
    subscriptions.settings.onChange('gravatar', 'status', () => {
        lib.ui.toggleBoolClass($error, 'visible', services.gravatar.status.is.error());
    });

    subscriptions.settings.onChange('gravatar', 'errorMessage', errorMessage => {
        $errorMessage.textContent = errorMessage;
    });

    return $error;

};
