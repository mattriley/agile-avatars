export default ({ test, compose, helpers }) => {

    const setup = ({ outlineDefault }) => {
        const { components, services } = compose({
            storage: {
                defaults: {
                    settings: {
                        options: { outline: outlineDefault }
                    }
                }
            }
        });
        const $checkbox = components.optionsBar.options.outline().querySelector('input');
        const $tagList = components.tagList.container();
        services.tags.insertTag();
        return { $tagList, $checkbox, helpers };
    };

    test('outline toggles on', t => {
        const { $tagList, $checkbox } = setup({ outlineDefault: false });
        $checkbox.checked = true;
        helpers.dispatchEvent('change', $checkbox);
        const [tag1] = helpers.getTags($tagList);
        const outlineColor = tag1.getTagStyle().borderColor;
        t.notOk(outlineColor === 'transparent');

    });

    test('outline toggles off', t => {
        const { $tagList, $checkbox } = setup({ outlineDefault: true });
        $checkbox.checked = false;
        helpers.dispatchEvent('change', $checkbox);
        const [tag1] = helpers.getTags($tagList);
        const outlineColor = tag1.getTagStyle().borderColor;
        t.ok(outlineColor === 'transparent');

    });

};
