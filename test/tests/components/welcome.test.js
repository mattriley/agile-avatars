module.exports = ({ test, boot, helpers }) => {

    test('welcome modal dismissed by continue button', t => {
        const { components, services } = boot();
        const $welcome = components.modals.welcome();
        services.settings.changeModal('welcome');
        const $dismiss = $welcome.querySelector('button');
        helpers.dispatchEvent('click', $dismiss);
        helpers.assertBoolClass(t, $welcome, 'visible', false);  
        
    });

};