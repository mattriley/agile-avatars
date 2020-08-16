module.exports = ({ el, services, subscriptions, elements }) => () => {

    const $freetext = el('textarea', 'freetext')
        .addEventListener('input', () => {
            services.gravatar.changeFreetext($freetext.value);
        });

    subscriptions.settings.gravatar.onChange('freetext', freetext => {
        $freetext.value = freetext;
    }).invoke();

    subscriptions.settings.gravatar.onChange('status', () => {
        $freetext.disabled = services.gravatar.status.is.working();
    }).invoke();

    const labelText = 'Email addresses:';

    return elements.label(labelText, $freetext);
    
};
