export default ({ ui, services, io }) => () => {

    return ui.el('a', { textContent: 'Import images from Gravatar' })
        .addEventListener('click', () => {
            io.mixpanel.track('gravatar-import');
            services.settings.changeModal('gravatar');
        });

};
