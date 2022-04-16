export default ({ el, roleList, subscriptions, ui }) => () => {

    const $roleList = el('div', 'role-list visible-false');

    subscriptions.roles.onInsert(roleId => {
        const $role = roleList.roleCustomiser.container(roleId);
        $roleList.append($role);
    });

    subscriptions.roles.onFirstInsert(() => {
        ui.toggleBoolClass($roleList, 'visible', true);
    });

    return $roleList;

};
