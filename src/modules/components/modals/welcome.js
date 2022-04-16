export default ({ el, components, services, config }) => () => {

    const $heading = el('h1', 'welcome-title', {
        textContent: `Welcome to ${config.app.name}`
    });

    const $image = el('img', {
        src: 'img/welcome.png',
        width: 800
    });

    const $continue = el('button', { textContent: 'Continue' });
    $continue.addEventListener('click', services.settings.clearModal);

    const $content = el('div', 'welcome').append($heading, $image);

    return components.modal({
        name: 'welcome',
        content: $content,
        actions: $continue
    });

};
