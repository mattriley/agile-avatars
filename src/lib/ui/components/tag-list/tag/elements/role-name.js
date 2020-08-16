module.exports = ({ elements, services, subscriptions }) => instanceId => {

    const $roleName = elements.editableSpan({
        className: 'role-name'
    }).addEventListener('blur', e => {
        const roleName = e.target.textContent.trim();
        services.tags.changeInstanceRole(instanceId, roleName);
    });

    subscriptions.tagInstances.onChange(instanceId, 'roleName', roleName => {
        $roleName.textContent = roleName;
    }).invoke();

    return $roleName;

};
