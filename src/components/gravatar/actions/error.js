module.exports = ({ el, services, subscriptions, util }) => () => {

    const $errorMessage = el('div', 'error-message');
    
    const $dismiss = el('a', 'dismiss', { textContent: 'Dismiss' })
        .addEventListener('click', services.gravatar.status.to.ready);

    const $error = el('div', 'error').append($errorMessage, $dismiss);
    
    subscriptions.settings.gravatar.onChange('status', () => {
        util.toggleBoolClass($error, 'visible', services.gravatar.status.is.error());
    }).invoke();

    subscriptions.settings.gravatar.onChange('errorMessage', errorMessage => {
        $errorMessage.textContent = errorMessage;
    }).invoke();

    return $error;

};
