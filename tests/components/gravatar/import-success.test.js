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

        const $gravatar = components.modals.gravatar();
        const $freetext = $gravatar.querySelector('.freetext');
        const $import = $gravatar.querySelector('.import');
        const $tagList = components.tagList();
        
        $freetext.value = 'foo@bar.com';
        helpers.dispatchEvent('input', $freetext);
        t.equal($import.disabled, false);

        await helpers.onTagListMutation(
            $tagList,
            () => {
                helpers.dispatchEvent('click', $import);
            },
            async tag1 => {
                t.equal(tag1.getTagName(), 'Foo');
                t.equal(await tag1.getImage(), 'url(data:image/jpg;base64,QllURVM=)');
                helpers.assertBoolClass(t, $gravatar, 'visible', false); 
            }
        );  
    });

};