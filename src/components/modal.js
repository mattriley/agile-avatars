module.exports = ({ elements, services, subscriptions }) => ({ name, title, content, actions }) => {

    const onVisibilityChange = callback => {
        subscriptions.settings.onChange('app', 'modal', modal => {
            const visible = modal === name;
            callback(visible);
        });
    };

    return elements.modal({ title, content, actions, onVisibilityChange })
        .addEventListener('dismiss', services.settings.clearModal);

};
