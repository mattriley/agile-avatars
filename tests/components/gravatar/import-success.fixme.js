export default ({ test, assert }) => ({ setup }) => {

    test('import success', async () => {
        const { compose, helpers, window } = setup();

        const { components } = compose({
            overrides: {
                services: {
                    gravatar: {
                        fetchProfileAsync: () => Promise.resolve({ displayName: 'foo' }),
                        fetchImageAsync: () => Promise.resolve(new window.Blob(['BYTES'], { type: 'image/jpg' }))
                    }
                }
            }
        });

        const $gravatarModal = components.modals.gravatar();
        const $freetextField = $gravatarModal.querySelector('.freetext');
        const $importButton = $gravatarModal.querySelector('.import');
        const $tagList = components.tagList.container();

        const assertGravatarModalVisible = helpers.assertBoolClass(assert, $gravatarModal, 'visible');

        $freetextField.value = 'foo@bar.com';
        helpers.dispatchEvent('input', $freetextField);

        await helpers.onTagListMutation(
            $tagList,
            () => {
                helpers.dispatchEvent('click', $importButton);

            },
            async tag1 => {
                assert.equal(tag1.getTagName(), 'Foo');
                assert.equal(await tag1.getImage(), 'url(data:image/jpg;base64,QllURVM=)');
                assertGravatarModalVisible(false);
            }
        );
    });

};
