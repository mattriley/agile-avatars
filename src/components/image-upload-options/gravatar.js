module.exports = ({ el, services }) => () => {

    return el('a', { textContent: 'Import images from Gravatar' })
        .addEventListener('click', () => {
            services.settings.changeModal('gravatar');
        });

};
