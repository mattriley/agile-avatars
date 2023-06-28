export default ({ test, assert, helpers }) => ({ compose }) => {

    test('change invoked by enter key', async () => {
        await new Promise(resolve => {
            const { elements } = compose().modules;
            const $editableSpan = elements.editableSpan();

            $editableSpan.addEventListener('change', () => {
                resolve();

            });

            helpers.dispatchKeydown($editableSpan, 'Enter');
        });
    });

    test('change not invoked by key other than enter key', () => {
        const { elements } = compose().modules;
        const $editableSpan = elements.editableSpan();

        $editableSpan.addEventListener('change', () => {
            assert.fail();
        });

        helpers.dispatchKeydown($editableSpan, 'A');

    });

    test('editing', () => {
        const { elements } = compose().modules;
        const $editableSpan = elements.editableSpan();

        $editableSpan.addEventListener('change', () => {
            assert.equal($editableSpan.textContent, 'foo');

        });

        $editableSpan.textContent = 'foo';
        helpers.dispatchEvent('blur', $editableSpan);
    });

};
