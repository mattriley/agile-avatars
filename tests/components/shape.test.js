// TODO: Explicit tests for toggling with Enter and Space keys.

module.exports = ({ test, boot, helpers }) => {

    const toggleTestCase = (t, shapeName) => {
        const { components } = boot();
        const $shape = components.optionsBar.elements.shapeOption(shapeName);   
        const $anotherShape = components.optionsBar.elements.shapeOption('foobar');
        helpers.dispatchEvent('click', $anotherShape);
        const assertSelected = helpers.assertBoolClass(t, $shape, 'selected');
        assertSelected(false);
        helpers.dispatchEvent('click', $shape);
        assertSelected(true);        
    };

    const shapeTestCase = (t, shapeName) => {
        const { components, services, config } = boot();
        const $shape = components.optionsBar.elements.shapeOption(shapeName);   
        const $tagList = components.tagList();
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
        const { components } = boot();
        const $shape = components.optionsBar.elements.shapeOption(shapeName);   
        const $anotherShape = components.optionsBar.elements.shapeOption('foobar');
        helpers.dispatchEvent('click', $anotherShape);
        const assertSelected = helpers.assertBoolClass(t, $shape, 'selected');
        assertSelected(false);
        helpers.dispatchKeydown($shape, 'A');
        assertSelected(false);        
    });

};