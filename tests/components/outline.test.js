export default ({ test, assert }, { helpers }) => ({ compose }) => {

    const setup = ({ outlineDefault }) => {
        const { components, services } = compose({
            config: {
                storage: {
                    defaults: {
                        settings: {
                            options: { outline: outlineDefault }
                        }
                    }
                }
            }
        }).modules;
        const $checkbox = components.optionsBar.options.outline().querySelector('input');
        const $tagList = components.tagList.container();
        services.tags.insertTag();
        return { $tagList, $checkbox, helpers };
    };

    test('outline toggles on', () => {
        const { $tagList, $checkbox } = setup({ outlineDefault: false });
        $checkbox.checked = true;
        helpers.dispatchEvent('change', $checkbox);
        const [tag1] = helpers.getTags($tagList);
        const outlineColor = tag1.getTagStyle().borderColor;
        assert.ok(outlineColor !== 'transparent');

    });

    test('outline toggles off', () => {
        const { $tagList, $checkbox } = setup({ outlineDefault: true });
        $checkbox.checked = false;
        helpers.dispatchEvent('change', $checkbox);
        const [tag1] = helpers.getTags($tagList);
        const outlineColor = tag1.getTagStyle().borderColor;
        assert(outlineColor === 'transparent');

    });

};
