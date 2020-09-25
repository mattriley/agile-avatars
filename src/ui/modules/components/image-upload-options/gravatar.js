module.exports = ({ el, services, gtag }) => () => {

    return el('a', { textContent: 'Import images from Gravatar' })
        .addEventListener('click', () => {
            gtag('event', 'gravatar-clicked');
            services.settings.changeModal('gravatar');
        });

};
