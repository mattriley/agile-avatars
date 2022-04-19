export default ({ test, compose, helpers }) => {

    test('change invoked by enter key', async () => {
        await new Promise(resolve => {
            const { elements } = compose();
            const $editableSpan = elements.editableSpan();

            $editableSpan.addEventListener('change', () => {
                resolve();

            });

            helpers.dispatchKeydown($editableSpan, 'Enter');
        });
    });

    test('change not invoked by key other than enter key', t => {
        const { elements } = compose();
        const $editableSpan = elements.editableSpan();

        $editableSpan.addEventListener('change', () => {
            t.fail();
        });

        helpers.dispatchKeydown($editableSpan, 'A');

    });

    test('editing', t => {
        const { elements } = compose();
        const $editableSpan = elements.editableSpan();

        $editableSpan.addEventListener('change', () => {
            t.equal($editableSpan.textContent, 'foo');

        });

        $editableSpan.textContent = 'foo';
        helpers.dispatchEvent('blur', $editableSpan);
    });

};
