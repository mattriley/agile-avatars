export default ({ ui, components, subscriptions }) => () => {

    const $roleList = ui.el('div', 'role-list visible-false');

    subscriptions.roles.onInsert(roleId => {
        const $role = components.roleList.roleCustomiser.container(roleId);
        $roleList.append($role);
    });

    subscriptions.roles.onFirstInsert(() => {
        ui.toggleBoolClass($roleList, 'visible', true);
    });

    return $roleList;

};
