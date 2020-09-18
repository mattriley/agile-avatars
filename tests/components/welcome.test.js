module.exports = ({ test, boot, helpers }) => {

    test('welcome modal dismissed by continue button', t => {
        const { components, services } = boot();
        const $welcomeModal = components.modals.welcome();
        const assertVisible = helpers.assertBoolClass(t, $welcomeModal, 'visible');
        assertVisible(false);
        services.settings.changeModal('welcome');
        assertVisible(true);
        const $dismiss = $welcomeModal.querySelector('button');
        helpers.dispatchEvent('click', $dismiss);
        assertVisible(false);        
    });

};