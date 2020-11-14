module.exports = ({ test, boot, helpers }) => {

    const testCase = (t, mode, adjustment) => {
        const defaultValue = 2;
        const targetCount = defaultValue + adjustment;            
        
        const { components, services } = boot({ 
            config: { 
                storage: {
                    defaults: {
                        settings: { 
                            options: { active: 0, passive: 0, [mode]: defaultValue } 
                        }
                    }
                }
            }
        });

        const subject = components.optionsBar.numberOption(mode);
        const $input = subject.querySelector('input');
        const $tagList = components.tagList.container();        
            
        services.tags.insertTag();  

        {
            const modeCount = $tagList.querySelectorAll(`.${mode}`).length;  
            t.equal(modeCount, defaultValue);
        }
    
        $input.value = targetCount;
        helpers.dispatchEvent('input', $input); 

        {
            const modeCount = $tagList.querySelectorAll(`.${mode}`).length;
            t.equal(modeCount, targetCount);
        }
        
        
    };

    test('active instances increased', t => {
        testCase(t, 'active', 1);
    });

    test('active instances decreased', t => {
        testCase(t, 'active', -1);
    });

    test('passive instances increased', t => {
        testCase(t, 'passive', 1);
    });

    test('passive instances decreased', t => {
        testCase(t, 'passive', -1);
    });

};
