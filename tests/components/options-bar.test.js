module.exports = ({ test, boot, helpers }) => {
    
    test('options bar not visible until first tag inserted', t => {
        const { components, services } = boot();
        const $optionsBar = components.optionsBar.container();
        const assertVisible = helpers.assertBoolClass(t, $optionsBar, 'visible');
        assertVisible(false);    
        services.tags.insertTag();
        assertVisible(true);
    });

};
