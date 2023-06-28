export default ({ test, assert }) => ({ compose }) => {

    test('app renders', () => {
        const { components } = compose().modules;
        const $app = components.app();
        assert($app);
    });

};


