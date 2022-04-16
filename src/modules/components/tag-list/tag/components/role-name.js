export default ({ elements, services, subscriptions }) => tagInstanceId => {

    const $roleName = elements.editableSpan('role-name')
        .addEventListener('change', () => {
            services.tags.changeTagRole(tagInstanceId, $roleName.textContent);
        });

    subscriptions.tagInstances.onChange(tagInstanceId, 'roleName', roleName => {
        $roleName.textContent = roleName;
    });

    return $roleName;

};
