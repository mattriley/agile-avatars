module.exports = ({ test, boot, window }) => {

    test('script tag initialised correctly', t => {
        const { components } = boot({ 
            config: { 
                googleAnalytics: { enabled: true } 
            }
        });
        const $script = components.googleAnalytics();
        t.equal($script.tagName, 'SCRIPT');
        t.equal($script.src, 'https://www.googletagmanager.com/gtag/js?id=UA-34497639-2');
        
    });

    test('tracking metadata set correctly', t => {
        const date = new Date(1590969600000);
        const { components } = boot({ 
            config: { 
                googleAnalytics: { enabled: true } 
            },
            io: {
                date: () => date
            }
        });
        components.googleAnalytics();
        t.deepEqual(Array.from(window.dataLayer[0]), ['js', date]);
        t.deepEqual(Array.from(window.dataLayer[1]), ['config', 'UA-34497639-2']);
        
    });

    test('gtag function sets metadata correctly', t => {
        const { components } = boot({ 
            config: { 
                googleAnalytics: { enabled: true } 
            }
        });
        components.googleAnalytics();
        window.gtag('foobar');
        t.deepEqual(Array.from(window.dataLayer[2]), ['foobar']);
        
    });

    test('disabled', t => {
        const { components } = boot({ 
            config: { 
                googleAnalytics: { enabled: false } 
            }
        });
        components.googleAnalytics();
        t.equal(window['ga-disable-UA-34497639-2'], true);
        
    });

};
