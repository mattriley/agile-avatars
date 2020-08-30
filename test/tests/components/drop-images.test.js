module.exports = ({ test, boot, window, helpers }) => {
    
    test('multiple images dropped', async t => {
        const { components } = boot();
        const $tagList = components.tagList();
        const $dropzone = components.dropzone();

        const files = [
            new window.File(['BYTES'], 'foo+bar.jpg', { type: 'image/jpg' }),
            new window.File(['BYTES'], 'baz+qux.jpg', { type: 'image/jpg' })
        ];

        await helpers.onTagListMutation(
            $tagList, 
            () => {
                const event = new window.Event('drop');
                Object.defineProperty(event, 'dataTransfer', { value: { files } });
                $dropzone.dispatchEvent(event);                
            },
            (tag1, tag2) => {
                t.deepEqual([tag1.getTagName(), tag1.getRoleName()], ['Foo', 'BAR']);
                t.deepEqual([tag2.getTagName(), tag2.getRoleName()], ['Baz', 'QUX']);
                
            }
        );        
    });

};
