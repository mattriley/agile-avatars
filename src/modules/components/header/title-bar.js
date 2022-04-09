module.exports = ({ services, el, config }) => () => {

    const $tips = el('a', 'tips', { textContent: 'Tips & tricks' })
        .addEventListener('click', () => {
            services.settings.changeModal('tips');
        });

    const $issues = el('a', {
        textContent: 'Send feedback',
        target: '_blank',
        href: config.app.issues
    });

    const $source = el('a', {
        textContent: 'Source code',
        target: '_blank',
        href: config.app.source
    });

    const $devBar = el('dev-bar').append($tips, $issues, $source);
    $devBar.setAttribute('app-name', config.app.name);

    return $devBar;

};
