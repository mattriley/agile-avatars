module.exports = ({ test, boot, window, helpers }) => {

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
        $monsterid.click();                
        helpers.assertBoolClass(t, $monsterid, 'selected', true);
    });

    test('import gravatar error', async t => {
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
                $import.click();
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

    const successTestCase = async (t, { freetext }) => {
        const { components } = boot({
            services: {
                gravatar: {
                    fetchNameAsync: () => 'foo'
                }
            }
        });
    
        const $gravatar = components.modals.gravatar();
        const $freetext = $gravatar.querySelector('.freetext');
        const $import = $gravatar.querySelector('.import');
        const $tagList = components.tagList();
            
        $freetext.value = freetext;
        helpers.dispatchEvent('input', $freetext);
        t.notOk($import.disabled);
    
        await helpers.onTagListMutation(
            $tagList,
            () => {
                $import.click();
            },
            tag1 => {
                t.equal(tag1.getTagName(), 'Foo');
                helpers.assertBoolClass(t, $gravatar, 'visible', false);
                
            }
        );  
    };

    test('import gravatar successfully with email address', async t => {
        await successTestCase(t, { freetext: 'foo@bar.com' });
    });

    test('import gravatar successfully with username', async t => {
        await successTestCase(t, { freetext: 'foo' });
    });

    test('tag inserted from gravatar', async t => {
        const { components } = boot({
            services: {
                gravatar: {
                    fetchNameAsync: () => 'foo',
                    fetchImageAsync: () => new window.Blob(['BYTES'], { type: 'image/jpg' })
                }
            }
        }); 

        window.document.body.append(components.styles());     
        const $tagList = components.tagList();   
        const $gravatar = components.modals.gravatar();
        const $freetext = $gravatar.querySelector('.freetext');
        const $importButton = $gravatar.querySelector('.import');

        const freetext = 'foo@bar.com';
        $freetext.value = freetext;
        helpers.dispatchEvent('input', $freetext);

        await helpers.onTagListMutation(
            $tagList,
            () => {
                helpers.dispatchEvent('click', $importButton);
            },
            async tag1 => {
                t.equal(tag1.getTagName(), 'Foo');
                t.equal(await tag1.getImage(), 'url(data:image/jpg;base64,QllURVM=)');
                
            }
        );       
    });

};