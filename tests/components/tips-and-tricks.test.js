module.exports = ({ test, boot, helpers }) => {

    test('tips modal triggered by nav bar link', t => {
        const { components } = boot();
        const $header = components.header.navBar();
        const $tips = $header.querySelector('.tips');
        const $tipsModal = components.modals.tips('tips');
        helpers.dispatchEvent('click', $tips);
        helpers.assertBoolClass(t, $tipsModal, 'visible', true);
        
    });
    
};
