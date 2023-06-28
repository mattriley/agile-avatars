// TODO: Explicit tests for toggling with Enter and Space keys.

export default ({ test, assert }) => ({ compose, helpers }) => {

    const toggleTestCase = shapeName => {
        const { components } = compose().modules;
        const $shape = components.optionsBar.shapeOption(shapeName);
        const $anotherShape = components.optionsBar.shapeOption('foobar');
        helpers.dispatchEvent('click', $anotherShape);
        const assertSelected = helpers.assertBoolClass(assert, $shape, 'selected');
        assertSelected(false);
        helpers.dispatchEvent('click', $shape);
        assertSelected(true);
    };

    const shapeTestCase = (t, shapeName) => {
        const { constants, modules } = compose();
        const { components, services } = modules;
        const $shape = components.optionsBar.shapeOption(shapeName);
        const $tagList = components.tagList.container();
        services.tags.insertTag();
        helpers.dispatchKeydown($shape, 'Enter');
        const [tag1] = helpers.getTags($tagList);
        const imageStyle = tag1.getImageStyle();
        assert.equal(imageStyle.borderRadius, `${constants.options.shapeRadius[shapeName]}%`);

    };

    test('square shape toggles on and off', () => {
        toggleTestCase('square');
    });

    test('square shape applied to tag', () => {
        shapeTestCase('square');
    });

    test('circle shape toggles on and off', () => {
        toggleTestCase('circle');
    });

    test('circle shape applied to tag', () => {
        shapeTestCase('circle');
    });

    // TODO: Remove duplication
    test('shape not selected on keypress other than Enter or Space', () => {
        const shapeName = 'circle';
        const { components } = compose().modules;
        const $shape = components.optionsBar.shapeOption(shapeName);
        const $anotherShape = components.optionsBar.shapeOption('foobar');
        helpers.dispatchEvent('click', $anotherShape);
        const assertSelected = helpers.assertBoolClass(assert, $shape, 'selected');
        assertSelected(false);
        helpers.dispatchKeydown($shape, 'A');
        assertSelected(false);
    });

};
