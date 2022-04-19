export default ({ test, compose, helpers }) => {

    test('empty reverts to minimum on blur', t => {
        const { elements } = compose();
        const $input = elements.number({ min: 1, max: 9, step: 1 });
        $input.value = '';
        helpers.dispatchEvent('blur', $input);
        t.equal($input.value, '1');
    });

    test('empty remains empty on input', t => {
        const { elements } = compose();
        const $input = elements.number({ min: 1, max: 9, step: 1 });
        $input.value = '';
        helpers.dispatchEvent('input', $input);
        t.equal($input.value, '');
    });

    test('minimum is accepted', t => {
        const { elements } = compose();
        const $input = elements.number({ min: 1, max: 9, step: 1 });
        const newValue = 1;
        $input.value = newValue;
        helpers.dispatchEvent('input', $input);
        t.equal($input.value, newValue.toString());
    });

    test('maxium is accepted', t => {
        const { elements } = compose();
        const $input = elements.number({ min: 1, max: 9, step: 1 });
        const newValue = 9;
        $input.value = newValue;
        helpers.dispatchEvent('input', $input);
        t.equal($input.value, newValue.toString());
    });

    test('minimum enforced', t => {
        const { elements } = compose();
        const $input = elements.number({ min: 1, max: 9, step: 1 });
        $input.value = 0;
        helpers.dispatchEvent('blur', $input);
        t.equal($input.value, '1');
    });

    test('maximum enforced', t => {
        const { elements } = compose();
        const $input = elements.number({ min: 1, max: 9, step: 1 });
        $input.value = 10;
        helpers.dispatchEvent('blur', $input);
        t.equal($input.value, '9');
    });

    test('decimal ignored', t => {
        const { elements } = compose();
        const $input = elements.number({ min: 1, max: 9, step: 1 });
        $input.value = 2.5;
        helpers.dispatchEvent('blur', $input);
        t.equal($input.value, '2');
    });

};
