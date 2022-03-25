module.exports = ({ el, services, vendorServices }) => () => {

    return el('a', { textContent: 'Import images from Gravatar' })
        .addEventListener('click', () => {
            vendorServices.gtag('event', 'gravatar-clicked');
            services.settings.changeModal('gravatar');
        });

};
