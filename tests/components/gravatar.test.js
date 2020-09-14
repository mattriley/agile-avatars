/* eslint-disable no-async-promise-executor */
module.exports = async ({ test, boot, window, helpers }) => {

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

    await test('tag inserted from gravatar', async t => {
        const { components } = boot({
            services: {
                gravatar: {
                    fetchProfileAsync: () => ({ displayName: 'foo' }),
                    fetchImageAsync: () => new window.Blob(['BYTES'], { type: 'image/jpg' })
                }
            }
        }); 
        

        window.document.body.append(components.styles.tagImage());     

        await new Promise(async resolve => {

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
                    resolve();
                }
            );      
        }); 
    
    });

};