module.exports = ({ test, boot, window, helpers }) => {

    const setup = ({ spacingDefault }) => {
        const { components } = boot({ 
            config: { defaultSettings: { options: { size: spacingDefault } } } 
        });
        const $spacingInput = components.optionsBar.options.spacing().querySelector('input');
        const $tagList = components.tagList();
        const $styles = components.styles();
        window.document.body.append($styles);    
        return { $tagList, $spacingInput };
    };

    const testCase = (t, adjustment) => {
        const spacingDefault = 5;
        const { $tagList, $spacingInput } = setup({ spacingDefault });
        const targetSpacing = spacingDefault + adjustment;
        $spacingInput.value = targetSpacing; 
        helpers.dispatchEvent('input', $spacingInput);
        const tagListStyle = window.getComputedStyle($tagList);
        t.equal(tagListStyle.gap, `${targetSpacing}px`);
        t.end();
    };

    test('tag spacing increases', t => {
        testCase(t, 2);
    });

    test('tag spacing decreases', t => {
        testCase(t, -2);
    });

};