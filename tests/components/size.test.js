module.exports = ({ test, boot, window, helpers }) => {

    const setup = ({ sizeDefault }) => {
        const { components, services, config } = boot({ 
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
        const $sizeInput = components.optionsBar.options.size().querySelector('input');
        const $tagList = components.tagList();
        const $styles = components.styles.tagSize();
        window.document.body.append($styles);            
        services.tags.insertTag();
        return { $tagList, $sizeInput, config };
    };

    const testCase = (t, adjustment) => {
        const sizeDefault = 150;
        const targetSize = sizeDefault + adjustment;
        const { $tagList, $sizeInput, config } = setup({ sizeDefault });
        $sizeInput.value = targetSize;
        helpers.dispatchEvent('input', $sizeInput);
        const [tag1] = helpers.getTags($tagList);
        const tagListStyle = window.getComputedStyle($tagList);
        t.equal(tagListStyle.gridTemplateColumns, `repeat(auto-fill, ${targetSize}px)`);        
        const sizeMinusPadding = targetSize - (config.tags.imagePadding * 2);
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
