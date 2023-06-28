export default ({ test, assert, helpers, window }) => ({ compose }) => {

    const setup = ({ sizeDefault }) => {
        const { constants, modules } = compose({
            config: {
                storage: {
                    defaults: {
                        settings: {
                            options: { size: sizeDefault }
                        }
                    }
                }
            }
        });
        const { components, services } = modules;
        const $sizeInput = components.optionsBar.options.size().querySelector('input');
        const $tagList = components.tagList.container();
        services.tags.insertTag();
        return { $tagList, $sizeInput, constants };
    };

    const testCase = adjustment => {
        const sizeDefault = 150;
        const targetSize = sizeDefault + adjustment;
        const { $tagList, $sizeInput, constants } = setup({ sizeDefault });
        $sizeInput.value = targetSize;
        helpers.dispatchEvent('input', $sizeInput);
        const [tag1] = helpers.getTags($tagList);
        const tagListStyle = window.getComputedStyle($tagList);
        assert.equal(tagListStyle.gridTemplateColumns, `repeat(auto-fill, ${targetSize}px)`);
        const sizeMinusPadding = targetSize - (constants.tags.imagePadding * 2);
        const imageStyle = tag1.getImageStyle();
        assert.equal(imageStyle.width, `${sizeMinusPadding}px`);
        assert.equal(imageStyle.height, `${sizeMinusPadding}px`);

    };

    test('tag size increases', () => {
        testCase(50);
    });

    test('tag size decreases', () => {
        testCase(-50);
    });

};
