module.exports = ({ test, setup }) => {

    test('import succeeds', async t => {
        const { boot, helpers, window } = setup();

        const { components } = boot({
            services: {
                gravatar: {
                    fetchProfileAsync: () => ({ displayName: 'foo' }),
                    fetchImageAsync: () => new window.Blob(['BYTES'], { type: 'image/jpg' })
                }
            }
        });

        window.document.body.append(components.styles.tagImage()); 

        const $gravatarModal = components.modals.gravatar();
        const $freetextField = $gravatarModal.querySelector('.freetext');
        const $importButton = $gravatarModal.querySelector('.import');
        const $tagList = components.tagList();
        
        $freetextField.value = 'foo@bar.com';
        helpers.dispatchEvent('input', $freetextField);
        t.equal($importButton.disabled, false);

        await helpers.onTagListMutation(
            $tagList,
            () => {
                helpers.dispatchEvent('click', $importButton);
            },
            async tag1 => {
                t.equal(tag1.getTagName(), 'Foo');
                t.equal(await tag1.getImage(), 'url(data:image/jpg;base64,QllURVM=)');
                helpers.assertBoolClass(t, $gravatarModal, 'visible', false); 
            }
        );  
    });

};