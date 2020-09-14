module.exports = ({ test, boot, helpers }) => {

    test('import fails', async t => {
        const { components } = boot({
            services: {
                tags: {
                    insertGravatarAsync: () => { throw new Error(); }
                }
            }
        });

        const $gravatar = components.modals.gravatar();
        const $freetext = $gravatar.querySelector('.freetext');
        const $import = $gravatar.querySelector('.import');
        const $error = $gravatar.querySelector('.error');
        
        const freetext = 'foo@bar.com';

        await helpers.onMutation(
            $gravatar,
            () => {
                $freetext.value = freetext;
                helpers.dispatchEvent('input', $freetext);
                t.notOk($import.disabled);
                helpers.dispatchEvent('click', $import);
            },
            () => {
                const $errorMessage = $error.querySelector('.error-message');
                const $dismiss = $error.querySelector('.dismiss');
                helpers.assertBoolClass(t, $import, 'visible', false);
                helpers.assertBoolClass(t, $error, 'visible', true);
                t.equal($errorMessage.textContent, 'An error occurred. Please check your connection and try again.');                
                helpers.dispatchEvent('click', $dismiss);
            },
            () => {
                helpers.assertBoolClass(t, $import, 'visible', true);
                helpers.assertBoolClass(t, $error, 'visible', false);
                t.equal($freetext.value, freetext);                        
                
            }
        );  
    });

};