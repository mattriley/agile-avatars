export default ({ services, ui, constants }) => () => {

    const $tips = ui.el('a', 'tips', { textContent: 'Tips & tricks' })
        .addEventListener('click', () => {
            services.settings.changeModal('tips');
        });

    const $issues = ui.el('a', {
        textContent: 'Send feedback',
        target: '_blank',
        href: constants.app.issues
    });

    const $source = ui.el('a', {
        textContent: 'Source code',
        target: '_blank',
        href: constants.app.source
    });

    const $devBar = ui.el('dev-bar').append($tips, $issues, $source);
    $devBar.setAttribute('app-name', constants.app.name);

    return $devBar;

};
