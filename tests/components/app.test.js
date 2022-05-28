export default ({ test, compose }) => {

    test('app renders', t => {
        const { components } = compose().modules;
        const $app = components.app();
        t.ok($app);
    });

};


