export default ({ test, assert, helpers }) => ({ compose }) => {

    test('import failure', async () => {

        const { components } = compose({
            overrides: {
                services: {
                    tags: {
                        insertGravatarAsync: () => Promise.reject(new Error())
                    }
                }
            }
        });


        const $gravatarModal = components.modals.gravatar();
        const $freetextField = $gravatarModal.querySelector('.freetext');
        const $importButton = $gravatarModal.querySelector('.import');
        const $errorContainer = $gravatarModal.querySelector('.error');

        const assertImportButtonVisible = helpers.assertBoolClass(assert, $importButton, 'visible');
        const assertErrorContainerVisible = helpers.assertBoolClass(assert, $errorContainer, 'visible');

        const freetext = 'foo@bar.com';

        await helpers.onMutation(
            $gravatarModal,
            () => {
                // here

                $freetextField.value = freetext;
                helpers.dispatchEvent('input', $freetextField);
                assert.false($importButton.disabled);
                helpers.dispatchEvent('click', $importButton);
                // here
            },
            () => {
                // not here
                // console.warn('$$$');
                const $errorMessage = $errorContainer.querySelector('.error-message');
                const $dismiss = $errorContainer.querySelector('.dismiss');
                assertImportButtonVisible(false);
                assertErrorContainerVisible(true);
                assert.equal($errorMessage.textContent, 'An error occurred. Please check your connection and try again.');
                helpers.dispatchEvent('click', $dismiss);
            },
            () => {

                assertImportButtonVisible(true);
                assertErrorContainerVisible(false);
                assert.equal($freetextField.value, freetext);
            }
        );

    });

};
