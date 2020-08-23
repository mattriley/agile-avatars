module.exports = ({ elements, services, subscriptions }) => tagInstanceId => {

    const $roleName = elements.editableSpan('role-name')
        .addEventListener('blur', e => {
            const roleName = e.target.textContent.trim();
            services.tags.changeTagInstanceRole(tagInstanceId, roleName);
        });

    subscriptions.tagInstances.onChange(tagInstanceId, 'roleName', roleName => {
        $roleName.textContent = roleName;
    });

    return $roleName;

};
