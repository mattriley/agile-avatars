module.exports = ({ el, services, vendor }) => () => {

    return el('a', { textContent: 'Import images from Gravatar' })
        .addEventListener('click', () => {
            vendor.gtag('event', 'gravatar-clicked');
            services.settings.changeModal('gravatar');
        });

};
