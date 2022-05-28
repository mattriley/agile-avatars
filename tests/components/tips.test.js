export default ({ test, compose, helpers }) => {

    test('tips modal triggered by link in nav bar', t => {
        const { components } = compose().modules;
        const $tipsLink = components.header.titleBar().querySelector('.tips');
        const $tipsModal = components.modals.tips('tips');
        const assertVisible = helpers.assertBoolClass(t, $tipsModal, 'visible');
        assertVisible(false);
        helpers.dispatchEvent('click', $tipsLink);
        assertVisible(true);
    });

};
