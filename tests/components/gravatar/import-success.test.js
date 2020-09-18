module.exports = ({ test, setup }) => {

    test('import success', async t => {
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

        const assertGravatarModalVisible = helpers.assertBoolClass(t, $gravatarModal, 'visible'); 
        
        $freetextField.value = 'foo@bar.com';
        helpers.dispatchEvent('input', $freetextField);

        await helpers.onTagListMutation(
            $tagList,
            () => {
                helpers.dispatchEvent('click', $importButton);                
            },
            async tag1 => {
                t.equal(tag1.getTagName(), 'Foo');
                t.equal(await tag1.getImage(), 'url(data:image/jpg;base64,QllURVM=)');
                assertGravatarModalVisible(false);
            }
        );  
    });

};