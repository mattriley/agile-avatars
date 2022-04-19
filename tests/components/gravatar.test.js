export default ({ test, compose, helpers }) => {

    test('launches gravatar', t => {
        const { components } = compose();
        const $gravatarModal = components.modals.gravatar();
        const assertVisible = helpers.assertBoolClass(t, $gravatarModal, 'visible');
        assertVisible(false);
        const $gravatarLink = components.imageUploadOptions.gravatar();
        helpers.dispatchEvent('click', $gravatarLink);
        assertVisible(true);
    });

    test('prevented from importing from gravatar with no input', t => {
        const { components } = compose();
        const $gravatar = components.modals.gravatar();
        const $importButton = $gravatar.querySelector('.import');
        t.equal($importButton.disabled, true);
    });

    test('prevented from importing from gravatar with blank input', t => {
        const { components } = compose();
        const $gravatar = components.modals.gravatar();
        const $freetext = $gravatar.querySelector('.freetext');
        $freetext.textContent = '   \n   \n   ';
        helpers.dispatchEvent('input', $freetext);
        const $importButton = $gravatar.querySelector('.import');
        t.equal($importButton.disabled, true);
    });

    test('gravatar fallback changes', t => {
        const { components } = compose();
        const $gravatar = components.modals.gravatar();
        const $freetext = $gravatar.querySelector('.freetext');
        const $monsterid = $gravatar.querySelector('[title=monsterid]');
        $freetext.value = 'foo@bar.com';
        helpers.dispatchEvent('input', $freetext);
        helpers.dispatchEvent('click', $monsterid);
        helpers.assertBoolClass(t, $monsterid, 'selected', true);
    });

};
