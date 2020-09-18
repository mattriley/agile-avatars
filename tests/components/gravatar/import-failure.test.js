module.exports = ({ test, boot, helpers }) => {

    test('import failure', async t => {
        const { components } = boot({
            services: {
                tags: {
                    insertGravatarAsync: () => { throw new Error(); }
                }
            }
        });

        const $gravatarModal = components.modals.gravatar();
        const $freetextField = $gravatarModal.querySelector('.freetext');
        const $importButton = $gravatarModal.querySelector('.import');
        const $errorContainer = $gravatarModal.querySelector('.error');
        
        const assertImportButtonVisible = helpers.assertBoolClass(t, $importButton, 'visible');
        const assertErrorContainerVisible = helpers.assertBoolClass(t, $errorContainer, 'visible');

        const freetext = 'foo@bar.com';

        await helpers.onMutation(
            $gravatarModal,
            () => {
                $freetextField.value = freetext;
                helpers.dispatchEvent('input', $freetextField);
                t.notOk($importButton.disabled);
                helpers.dispatchEvent('click', $importButton);
            },
            () => {
                const $errorMessage = $errorContainer.querySelector('.error-message');
                const $dismiss = $errorContainer.querySelector('.dismiss');
                assertImportButtonVisible(false);
                assertErrorContainerVisible(true);
                t.equal($errorMessage.textContent, 'An error occurred. Please check your connection and try again.');                
                helpers.dispatchEvent('click', $dismiss);
            },
            () => {
                assertImportButtonVisible(true);
                assertErrorContainerVisible(false);
                t.equal($freetextField.value, freetext);                                        
            }
        );  
    });

};