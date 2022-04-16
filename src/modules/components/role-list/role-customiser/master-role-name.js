export default ({ elements, services, subscriptions }) => roleId => {

    const $roleName = elements.editableSpan(`role-name role${roleId}`)
        .addEventListener('change', () => {
            services.roles.changeRoleName(roleId, $roleName.textContent);
        });

    subscriptions.roles.onChange(roleId, 'roleName', roleName => {
        $roleName.textContent = roleName;
    });

    return $roleName;

};
