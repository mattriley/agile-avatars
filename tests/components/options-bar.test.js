module.exports = ({ test, boot, helpers }) => {
    
    test('options bar not visible until first tag inserted', t => {
        const { components, services } = boot();
        const $optionsBar = components.optionsBar();
        helpers.assertBoolClass(t, $optionsBar, 'visible', false);    
        services.tags.insertTag();
        helpers.assertBoolClass(t, $optionsBar, 'visible', true);        
    });

};
