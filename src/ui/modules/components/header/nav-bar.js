module.exports = ({ el, config, services }) => () => {

    const $tips = el('a', 'tips', { textContent: 'Tips & tricks' })
        .addEventListener('click', () => {
            services.settings.changeModal('tips');
        });

    const $issues = el('a', {
        textContent: 'Issues, feature requests, feedback',
        target: '_blank',
        href: config.app.issues
    });

    return el('nav', 'nav-bar').append($tips, $issues);

};
