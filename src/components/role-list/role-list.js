module.exports = ({ el, roleList, subscriptions, ui }) => () => {

    const $roleList = el('div', 'role-list visible-false');

    subscriptions.roles.onInsert(roleId => {
        const $role = roleList.roleCustomiser(roleId);
        $roleList.append($role);
    });

    subscriptions.roles.onFirstInsert(() => {
        ui.toggleBoolClass($roleList, 'visible', true);
    });

    return $roleList;
    
};
