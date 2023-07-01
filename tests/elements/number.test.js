export default ({ test, assert }, { helpers }) => ({ compose }) => {

    test('empty reverts to minimum on blur', () => {
        const { elements } = compose().modules;
        const $input = elements.number({ min: 1, max: 9, step: 1 });
        $input.value = '';
        helpers.dispatchEvent('blur', $input);
        assert.equal($input.value, '1');
    });

    test('empty remains empty on input', () => {
        const { elements } = compose().modules;
        const $input = elements.number({ min: 1, max: 9, step: 1 });
        $input.value = '';
        helpers.dispatchEvent('input', $input);
        assert.equal($input.value, '');
    });

    test('minimum is accepted', () => {
        const { elements } = compose().modules;
        const $input = elements.number({ min: 1, max: 9, step: 1 });
        const newValue = 1;
        $input.value = newValue;
        helpers.dispatchEvent('input', $input);
        assert.equal($input.value, newValue.toString());
    });

    test('maxium is accepted', () => {
        const { elements } = compose().modules;
        const $input = elements.number({ min: 1, max: 9, step: 1 });
        const newValue = 9;
        $input.value = newValue;
        helpers.dispatchEvent('input', $input);
        assert.equal($input.value, newValue.toString());
    });

    test('minimum enforced', () => {
        const { elements } = compose().modules;
        const $input = elements.number({ min: 1, max: 9, step: 1 });
        $input.value = 0;
        helpers.dispatchEvent('blur', $input);
        assert.equal($input.value, '1');
    });

    test('maximum enforced', () => {
        const { elements } = compose().modules;
        const $input = elements.number({ min: 1, max: 9, step: 1 });
        $input.value = 10;
        helpers.dispatchEvent('blur', $input);
        assert.equal($input.value, '9');
    });

    test('decimal ignored', () => {
        const { elements } = compose().modules;
        const $input = elements.number({ min: 1, max: 9, step: 1 });
        $input.value = 2.5;
        helpers.dispatchEvent('blur', $input);
        assert.equal($input.value, '2');
    });

};
