module.exports = ({ test, boot, helpers }) => {

    test('tips modal triggered by link in nav bar', t => {
        const { components } = boot();
        const $tipsLink = components.header.navBar().querySelector('.tips');
        const $tipsModal = components.modals.tips('tips');
        helpers.dispatchEvent('click', $tipsLink);
        helpers.assertBoolClass(t, $tipsModal, 'visible', true);        
    });
    
};
