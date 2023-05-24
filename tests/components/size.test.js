export default ({ test, compose, window, helpers }) => {

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

    const testCase = (t, adjustment) => {
        const sizeDefault = 150;
        const targetSize = sizeDefault + adjustment;
        const { $tagList, $sizeInput, constants } = setup({ sizeDefault });
        $sizeInput.value = targetSize;
        helpers.dispatchEvent('input', $sizeInput);
        const [tag1] = helpers.getTags($tagList);
        const tagListStyle = window.getComputedStyle($tagList);
        t.equal(tagListStyle.gridTemplateColumns, `repeat(auto-fill, ${targetSize}px)`);
        const sizeMinusPadding = targetSize - (constants.tags.imagePadding * 2);
        const imageStyle = tag1.getImageStyle();
        t.equal(imageStyle.width, `${sizeMinusPadding}px`);
        t.equal(imageStyle.height, `${sizeMinusPadding}px`);

    };

    test('tag size increases', t => {
        testCase(t, 50);
    });

    test('tag size decreases', t => {
        testCase(t, -50);
    });

};
