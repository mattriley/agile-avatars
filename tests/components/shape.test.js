// TODO: Explicit tests for toggling with Enter and Space keys.

export default ({ test, compose, helpers }) => {

    const toggleTestCase = (t, shapeName) => {
        const { components } = compose().modules;
        const $shape = components.optionsBar.shapeOption(shapeName);
        const $anotherShape = components.optionsBar.shapeOption('foobar');
        helpers.dispatchEvent('click', $anotherShape);
        const assertSelected = helpers.assertBoolClass(t, $shape, 'selected');
        assertSelected(false);
        helpers.dispatchEvent('click', $shape);
        assertSelected(true);
    };

    const shapeTestCase = (t, shapeName) => {
        const { config, modules } = compose();
        const { components, services } = modules;
        const $shape = components.optionsBar.shapeOption(shapeName);
        const $tagList = components.tagList.container();
        services.tags.insertTag();
        helpers.dispatchKeydown($shape, 'Enter');
        const [tag1] = helpers.getTags($tagList);
        const imageStyle = tag1.getImageStyle();
        t.equal(imageStyle.borderRadius, `${config.options.shapeRadius[shapeName]}%`);

    };

    test('square shape toggles on and off', t => {
        toggleTestCase(t, 'square');
    });

    test('square shape applied to tag', t => {
        shapeTestCase(t, 'square');
    });

    test('circle shape toggles on and off', t => {
        toggleTestCase(t, 'circle');
    });

    test('circle shape applied to tag', t => {
        shapeTestCase(t, 'circle');
    });

    // TODO: Remove duplication
    test('shape not selected on keypress other than Enter or Space', t => {
        const shapeName = 'circle';
        const { components } = compose().modules;
        const $shape = components.optionsBar.shapeOption(shapeName);
        const $anotherShape = components.optionsBar.shapeOption('foobar');
        helpers.dispatchEvent('click', $anotherShape);
        const assertSelected = helpers.assertBoolClass(t, $shape, 'selected');
        assertSelected(false);
        helpers.dispatchKeydown($shape, 'A');
        assertSelected(false);
    });

};
