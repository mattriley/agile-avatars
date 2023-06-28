export default ({ test, assert }) => ({ compose, helpers }) => {

    test('launches gravatar', () => {
        const { components } = compose().modules;
        const $gravatarModal = components.modals.gravatar();
        const assertVisible = helpers.assertBoolClass(assert, $gravatarModal, 'visible');
        assertVisible(false);
        const $gravatarLink = components.imageUploadOptions.gravatar();
        helpers.dispatchEvent('click', $gravatarLink);
        assertVisible(true);
    });

    test('prevented from importing from gravatar with no input', () => {
        const { components } = compose().modules;
        const $gravatar = components.modals.gravatar();
        const $importButton = $gravatar.querySelector('.import');
        assert.equal($importButton.disabled, true);
    });

    test('prevented from importing from gravatar with blank input', () => {
        const { components } = compose().modules;
        const $gravatar = components.modals.gravatar();
        const $freetext = $gravatar.querySelector('.freetext');
        $freetext.textContent = '   \n   \n   ';
        helpers.dispatchEvent('input', $freetext);
        const $importButton = $gravatar.querySelector('.import');
        assert.equal($importButton.disabled, true);
    });

    test('gravatar fallback changes', () => {
        const { components } = compose().modules;
        const $gravatar = components.modals.gravatar();
        const $freetext = $gravatar.querySelector('.freetext');
        const $monsterid = $gravatar.querySelector('[title=monsterid]');
        $freetext.value = 'foo@bar.com';
        helpers.dispatchEvent('input', $freetext);
        helpers.dispatchEvent('click', $monsterid);
        helpers.assertBoolClass(assert, $monsterid, 'selected', true);
    });

};
