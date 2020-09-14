module.exports = ({ test, boot, helpers }) => {

    test('import succeeds', async t => {
        const { components } = boot({
            services: {
                gravatar: {
                    fetchProfileAsync: () => ({ displayName: 'foo' })
                }
            }
        });

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
            tag1 => {
                t.equal(tag1.getTagName(), 'Foo');
                helpers.assertBoolClass(t, $gravatar, 'visible', false);            
            }
        );  
    });

};