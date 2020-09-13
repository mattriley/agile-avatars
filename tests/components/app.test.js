module.exports = ({ test, boot }) => {

    test('app renders', t => {
        const { components } = boot();
        const $app = components.app();
        t.ok($app);        
        
    });

};


