export default ({ test, assert, helpers }) => ({ compose }) => {

    test('tips modal triggered by link in nav bar', () => {
        const { components } = compose().modules;
        const $tipsLink = components.header.titleBar().querySelector('.tips');
        const $tipsModal = components.modals.tips('tips');
        const assertVisible = helpers.assertBoolClass(assert, $tipsModal, 'visible');
        assertVisible(false);
        helpers.dispatchEvent('click', $tipsLink);
        assertVisible(true);
    });

};
