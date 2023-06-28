export default ({ test, assert, helpers }) => ({ compose }) => {

    const testCase = (t, mode, adjustment) => {
        const defaultValue = 2;
        const targetCount = defaultValue + adjustment;

        const { components, services } = compose({
            config: {
                storage: {
                    defaults: {
                        settings: {
                            options: { active: 0, passive: 0, [mode]: defaultValue }
                        }
                    }
                }
            }
        }).modules;

        const subject = components.optionsBar.numberOption(mode);
        const $input = subject.querySelector('input');
        const $tagList = components.tagList.container();

        services.tags.insertTag();

        {
            const modeCount = $tagList.querySelectorAll(`.${mode}`).length;
            assert.equal(modeCount, defaultValue);
        }

        $input.value = targetCount;
        helpers.dispatchEvent('input', $input);

        {
            const modeCount = $tagList.querySelectorAll(`.${mode}`).length;
            assert.equal(modeCount, targetCount);
        }


    };

    test('active instances increased', () => {
        testCase(assert, 'active', 1);
    });

    test('active instances decreased', () => {
        testCase(assert, 'active', -1);
    });

    test('passive instances increased', () => {
        testCase(assert, 'passive', 1);
    });

    test('passive instances decreased', () => {
        testCase(assert, 'passive', -1);
    });

};
