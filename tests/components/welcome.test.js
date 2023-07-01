export default ({ test, assert }, { helpers }) => ({ compose }) => {

    test('welcome modal is visible by default', () => {
        const { components } = compose().modules;
        const $welcomeModal = components.modals.welcome();
        const assertVisible = helpers.assertBoolClass(assert, $welcomeModal, 'visible');
        assertVisible(true);
    });

    test('welcome modal dismissed by continue button', () => {
        const { components } = compose().modules;
        const $welcomeModal = components.modals.welcome();
        const assertVisible = helpers.assertBoolClass(assert, $welcomeModal, 'visible');
        const $dismiss = $welcomeModal.querySelector('button');
        helpers.dispatchEvent('click', $dismiss);
        assertVisible(false);
    });

};
