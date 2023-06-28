export default ({ test, assert, window, helpers }) => ({ compose }) => {

    test('multiple images chosen', () => {
        const { components } = compose().modules;
        const $tagList = components.tagList.container();
        const $chooseImages = components.imageUploadOptions.chooseImages().querySelector('a');

        const files = [
            new window.File(['BYTES'], 'foo+bar.jpg', { type: 'image/jpg' }),
            new window.File(['BYTES'], 'baz+qux.jpg', { type: 'image/jpg' })
        ];

        $chooseImages.addEventListener('click', async e => {

            await helpers.onTagListMutation(
                $tagList,
                () => {
                    // Work around not being able to create FileList or set files.
                    const $fileInput = e.fileInput;
                    Object.defineProperty($fileInput, 'files', { value: files });
                    helpers.dispatchEvent('change', $fileInput);
                },
                (tag1, tag2) => {
                    assert.deepEqual([tag1.getTagName(), tag1.getRoleName()], ['Foo', 'BAR']);
                    assert.deepEqual([tag2.getTagName(), tag2.getRoleName()], ['Baz', 'QUX']);

                }
            );

        });

        helpers.dispatchEvent('click', $chooseImages);
    });

};
