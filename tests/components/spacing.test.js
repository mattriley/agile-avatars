export default ({ test, assert }, { helpers, window }) => ({ compose }) => {

    const setup = ({ spacingDefault }) => {
        const { components } = compose({
            config: {
                storage: {
                    defaults: {
                        settings: {
                            options: { size: spacingDefault }
                        }
                    }
                }
            }
        }).modules;
        const $spacingInput = components.optionsBar.options.spacing().querySelector('input');
        const $tagList = components.tagList.container();
        return { $tagList, $spacingInput };
    };

    const testCase = adjustment => {
        const spacingDefault = 5;
        const { $tagList, $spacingInput } = setup({ spacingDefault });
        const targetSpacing = spacingDefault + adjustment;
        $spacingInput.value = targetSpacing;
        helpers.dispatchEvent('input', $spacingInput);
        const tagListStyle = window.getComputedStyle($tagList);
        assert.equal(tagListStyle.gap, `${targetSpacing}px`);

    };

    test('tag spacing increases', () => {
        testCase(2);
    });

    test('tag spacing decreases', () => {
        testCase(-2);
    });

};
