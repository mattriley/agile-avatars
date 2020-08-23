module.exports = ({ elements, services, subscriptions }) => roleId => {

    const $roleName = elements.editableSpan({
        className: `role-name role${roleId}`
    }).addEventListener('blur', e => {
        const roleName = e.target.textContent;
        services.roles.changeRoleName(roleId, roleName);
    });
    
    subscriptions.roles.onChange(roleId, 'roleName', roleName => {
        $roleName.textContent = roleName;
    });

    return $roleName;

};
