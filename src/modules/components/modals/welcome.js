export default ({ ui, components, services, constants }) => () => {

    const $heading = ui.el('h1', 'welcome-title', {
        textContent: `Welcome to ${constants.app.name}`
    });

    const $image = ui.el('img', {
        src: 'img/welcome.png',
        width: 800
    });

    const $continue = ui.el('button', { textContent: 'Continue' });
    $continue.addEventListener('click', services.settings.clearModal);

    const $content = ui.el('div', 'welcome').append($heading, $image);

    return components.modal({
        name: 'welcome',
        content: $content,
        actions: $continue
    });

};
