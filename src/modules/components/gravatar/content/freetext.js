export default ({ el, services, subscriptions, elements }) => () => {

    const $freetext = el('textarea', 'freetext')
        .addEventListener('input', () => {
            services.gravatar.changeFreetext($freetext.value);
        });

    subscriptions.settings.onChange('gravatar', 'freetext', freetext => {
        $freetext.value = freetext;
    });

    subscriptions.settings.onChange('gravatar', 'status', () => {
        $freetext.disabled = services.gravatar.status.is.working();
    });

    const labelText = 'Email addresses:';

    return elements.label(labelText, $freetext);

};
