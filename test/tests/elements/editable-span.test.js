module.exports = ({ test, boot, helpers }) => {

    test('change invoked by enter key', t => {       
        const { elements } = boot();
        const $editableSpan = elements.editableSpan();

        $editableSpan.addEventListener('change', () => {
            t.pass();
            t.end();
        });

        helpers.dispatchKeydown($editableSpan, 'Enter');
    });

    test('change not invoked by key other than enter key', t => {       
        const { elements } = boot();
        const $editableSpan = elements.editableSpan();

        $editableSpan.addEventListener('change', () => {
            t.fail();
        });

        helpers.dispatchKeydown($editableSpan, 'A');
        t.end();
    });    

    test('editing', t => {
        const { elements } = boot();
        const $editableSpan = elements.editableSpan();

        $editableSpan.addEventListener('change', () => {
            t.equal($editableSpan.textContent, 'foo');
            t.end();
        });

        $editableSpan.textContent = 'foo';
        helpers.dispatchEvent('blur', $editableSpan);
    });

};