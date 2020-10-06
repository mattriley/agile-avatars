module.exports = ({ el, services, subscriptions, dom }) => () => {

    const $import = el('button', 'import', { textContent: 'Import' })
        .addEventListener('click', () => {
            const { emails, fallback } = services.settings.getGravatar();
            services.tags.insertGravatarBatchAsync(emails, fallback);
        });

    subscriptions.settings.onChange('gravatar', 'status', () => {
        dom.toggleBoolClass($import, 'visible', services.gravatar.status.is.ready());
    });

    subscriptions.settings.onChange('gravatar', 'freetext', freetext => {
        $import.disabled = !freetext.trim();
    });

    return $import;

};
