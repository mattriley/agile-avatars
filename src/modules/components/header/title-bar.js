export default ({ services, ui, config }) => () => {

    const $tips = ui.el('a', 'tips', { textContent: 'Tips & tricks' })
        .addEventListener('click', () => {
            services.settings.changeModal('tips');
        });

    const $issues = ui.el('a', {
        textContent: 'Send feedback',
        target: '_blank',
        href: config.app.issues
    });

    const $source = ui.el('a', {
        textContent: 'Source code',
        target: '_blank',
        href: config.app.source
    });

    const $devBar = ui.el('dev-bar').append($tips, $issues, $source);
    $devBar.setAttribute('app-name', config.app.name);

    return $devBar;

};
