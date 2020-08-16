module.exports = ({ test, boot, helpers }) => {

    test('empty reverts to minimum on blur', t => {
        const { elements } = boot();
        const $input = elements.number({ min: 1, max: 9, step: 1 });
        $input.value = '';
        helpers.dispatchEvent('blur', $input);
        t.equal($input.value, '1');
        t.end();
    });

    test('empty remains empty on input', t => {
        const { elements } = boot();
        const $input = elements.number({ min: 1, max: 9, step: 1 });
        $input.value = '';
        helpers.dispatchEvent('input', $input);
        t.equal($input.value, '');
        t.end();
    });

    test('minimum is accepted', t => {
        const { elements } = boot();
        const $input = elements.number({ min: 1, max: 9, step: 1 });
        const newValue = 1;
        $input.value = newValue;
        helpers.dispatchEvent('input', $input);
        t.equal($input.value, newValue.toString());
        t.end();
    });

    test('maxium is accepted', t => {
        const { elements } = boot();
        const $input = elements.number({ min: 1, max: 9, step: 1 });
        const newValue = 9;
        $input.value = newValue;
        helpers.dispatchEvent('input', $input);
        t.equal($input.value, newValue.toString());
        t.end();
    });

    test('minimum enforced', t => {
        const { elements } = boot();
        const $input = elements.number({ min: 1, max: 9, step: 1 });
        $input.value = 0;
        helpers.dispatchEvent('input', $input);
        t.equal($input.value, '1');
        t.end();
    });

    test('maximum enforced', t => {
        const { elements } = boot();
        const $input = elements.number({ min: 1, max: 9, step: 1 });
        $input.value = 10;
        helpers.dispatchEvent('input', $input);
        t.equal($input.value, '9');
        t.end();
    });        

    test('decimal ignored', t => {
        const { elements } = boot();
        const $input = elements.number({ min: 1, max: 9, step: 1 });
        $input.value = 2.5;
        helpers.dispatchEvent('input', $input);
        t.equal($input.value, '2');
        t.end();
    });

};