export default ({ ui, services, mixpanel }) => () => {

    return ui.el('a', { textContent: 'Import images from Gravatar' })
        .addEventListener('click', () => {
            mixpanel.track('gravatar-import');
            services.settings.changeModal('gravatar');
        });

};
