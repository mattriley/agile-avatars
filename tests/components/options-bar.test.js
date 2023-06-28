export default ({ test, assert }) => ({ compose, helpers }) => {

    test('options bar not visible until first tag inserted', () => {
        const { components, services } = compose().modules;
        const $optionsBar = components.optionsBar.container();
        const assertVisible = helpers.assertBoolClass(assert, $optionsBar, 'visible');
        assertVisible(false);
        services.tags.insertTag();
        assertVisible(true);
    });

};
