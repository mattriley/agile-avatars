export default ({ ui }) => () => {

    const $gravatarTitle = ui.el('span', 'gravatar-title', {
        textContent: 'Import images from Gravatar'
    });

    const $aboutGravatar = ui.el('a', 'about-gravatar', {
        text: 'What is Gravatar?',
        href: 'https://en.gravatar.com/support/what-is-gravatar/',
        target: '_blank'
    });

    return ui.el('div').append($gravatarTitle, $aboutGravatar);

};
