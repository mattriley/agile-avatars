module.exports = ({ test, boot, helpers }) => {

    test('blur invoked by enter key', t => {       
        const { elements } = boot();
        const $editableSpan = elements.editableSpan();

        $editableSpan.addEventListener('blur', () => {
            t.pass();
            t.end();
        });

        helpers.dispatchKeydown($editableSpan, 'Enter');
    });

    test('blur not invoked by key other than enter key', t => {       
        const { elements } = boot();
        const $editableSpan = elements.editableSpan();

        $editableSpan.addEventListener('blur', () => {
            t.fail();
        });

        helpers.dispatchKeydown($editableSpan, 'A');
        t.end();
    });    

    test('editing', t => {
        const { elements } = boot();
        const $editableSpan = elements.editableSpan();

        $editableSpan.addEventListener('blur', () => {
            t.equal($editableSpan.textContent, 'foo');
            t.end();
        });

        $editableSpan.textContent = 'foo';
        helpers.dispatchEvent('blur', $editableSpan);
    });

};