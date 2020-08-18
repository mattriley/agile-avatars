module.exports = ({ elements, services, subscriptions }) => ({ name, title, content, actions }) => {

    const onVisibilityChange = callback => {
        subscriptions.settings.app.onChange('modal', modal => {
            const visible = modal === name;
            callback(visible);
        }).invoke();
    };

    return elements.modal({ title, content, actions, onVisibilityChange })
        .addEventListener('dismiss', services.settings.clearModal);

};
