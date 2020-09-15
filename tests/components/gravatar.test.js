module.exports = ({ test, boot, helpers }) => {

    test('launches gravatar', t => {
        const { components } = boot();
        const $gravatarModal = components.modals.gravatar();
        helpers.assertBoolClass(t, $gravatarModal, 'visible', false);
        const $gravatarLink = components.imageUploadOptions.gravatar();
        helpers.dispatchEvent('click', $gravatarLink);
        helpers.assertBoolClass(t, $gravatarModal, 'visible', true);        
    });

    test('prevented from importing from gravatar with no input', t => {
        const { components } = boot();
        const $gravatar = components.modals.gravatar();
        const $importButton = $gravatar.querySelector('.import');
        t.ok($importButton.disabled, true);        
    });

    test('prevented from importing from gravatar with blank input', t => {
        const { components } = boot();
        const $gravatar = components.modals.gravatar();
        const $freetext = $gravatar.querySelector('.freetext');
        $freetext.textContent = '   \n   \n   ';
        helpers.dispatchEvent('input', $freetext);
        const $importButton = $gravatar.querySelector('.import');
        t.ok($importButton.disabled);        
    });

    test('gravatar fallback changes', t => {
        const { components } = boot();
        const $gravatar = components.modals.gravatar();
        const $freetext = $gravatar.querySelector('.freetext');
        const $monsterid = $gravatar.querySelector('[title=monsterid]');
        $freetext.value = 'foo@bar.com';
        helpers.dispatchEvent('input', $freetext);
        helpers.dispatchEvent('click', $monsterid);
        helpers.assertBoolClass(t, $monsterid, 'selected', true);
    });

};