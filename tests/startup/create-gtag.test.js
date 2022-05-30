export default ({ test, window, compose }) => {

    // test('script tag initialised correctly', t => {
    //     const { components } = compose({ 
    //         config: { 
    //             googleAnalytics: { enabled: true } 
    //         }
    //     });
    //     const $script = components.googleAnalytics();
    //     t.equal($script.tagName, 'SCRIPT');
    //     t.equal($script.src, 'https://www.googletagmanager.com/gtag/js?id=UA-34497639-2');

    // });

    test('tracking metadata set correctly', t => {
        const date = new Date(1590969600000);
        const { vendorServices } = compose({
            config: { gtag: { enabled: true } },
            overrides: { io: { date: () => date } }
        }).modules;
        vendorServices.gtag('foobar');
        t.deepEqual(Array.from(window.dataLayer[0]), ['js', date]);
        t.deepEqual(Array.from(window.dataLayer[1]), ['config', 'UA-34497639-2']);
    });

    test('gtag function sets metadata correctly', t => {
        const { vendorServices } = compose({
            config: { gtag: { enabled: true } }
        }).modules;
        vendorServices.gtag('foobar');
        t.deepEqual(Array.from(window.dataLayer[2]), ['foobar']);
    });

    test('disabled', t => {
        const { vendorServices } = compose({
            config: { gtag: { enabled: false } }
        }).modules;
        vendorServices.gtag('foobar');
        t.equal(window['ga-disable-UA-34497639-2'], true);
    });

};
