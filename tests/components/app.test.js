export default ({ test, compose }) => {

    test('app renders', t => {
        const { components } = compose();
        const $app = components.app();
        t.ok($app);
        // t.ok(false);
    });

};


