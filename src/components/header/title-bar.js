module.exports = ({ services, el, config }) => () => {

    const $title = el('span', 'app-name', { textContent: config.app.name });

    const $author = el('a', 'author', {
        textContent: `by ${config.author.name}`,
        href: config.author.profile,
        target: '_blank'
    });

    const $tips = el('a', 'tips', { textContent: 'Tips & tricks' })
        .addEventListener('click', () => {
            services.settings.changeModal('tips');
        });

    const $issues = el('a', {
        textContent: 'Give feedback',
        target: '_blank',
        href: config.app.issues
    });

    const $source = el('a', {
        textContent: 'Source code',
        target: '_blank',
        href: config.app.source
    });

    const $left = el('div', 'left').append($title, $author);
    const $right = el('div', 'right').append($tips, $issues, $source);

    return el('div', 'title-bar').append($left, $right);

};
