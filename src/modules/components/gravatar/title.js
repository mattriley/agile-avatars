export default ({ el }) => () => {

    const $gravatarTitle = el('span', 'gravatar-title', {
        textContent: 'Import images from Gravatar'
    });

    const $aboutGravatar = el('a', 'about-gravatar', {
        text: 'What is Gravatar?',
        href: 'https://en.gravatar.com/support/what-is-gravatar/',
        target: '_blank'
    });

    return el('div').append($gravatarTitle, $aboutGravatar);

};
