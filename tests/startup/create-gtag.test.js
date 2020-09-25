module.exports = ({ test, boot, window }) => {

    // test('script tag initialised correctly', t => {
    //     const { components } = boot({ 
    //         config: { 
    //             googleAnalytics: { enabled: true } 
    //         }
    //     });
    //     const $script = components.googleAnalytics();
    //     t.equal($script.tagName, 'SCRIPT');
    //     t.equal($script.src, 'https://www.googletagmanager.com/gtag/js?id=UA-34497639-2');
        
    // });

    test.skip('tracking metadata set correctly', t => {
        const date = new Date(1590969600000);
        const { src, config } = boot({ 
            config: { 
                googleAnalytics: { enabled: true } 
            },
            io: {
                date: () => date
            }
        });
        src.ui.modules.lib.gtag({ config, window });
        t.deepEqual(Array.from(window.dataLayer[0]), ['js', date]);
        t.deepEqual(Array.from(window.dataLayer[1]), ['config', 'UA-34497639-2']);        
    });

    test.skip('gtag function sets metadata correctly', t => {
        const { src, config } = boot({ 
            config: { 
                googleAnalytics: { enabled: true } 
            }
        });
        src.ui.modules.lib.gtag({ config, window });
        window.gtag('foobar');
        t.deepEqual(Array.from(window.dataLayer[2]), ['foobar']);        
    });

    test.skip('disabled', t => {
        const { config, src } = boot({ 
            config: { 
                googleAnalytics: { enabled: false } 
            }
        });
        src.ui.modules.lib.gtag({ config, window });
        t.equal(window['ga-disable-UA-34497639-2'], true);        
    });

};
