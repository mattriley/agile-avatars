module.exports = ({ el, roleList, subscriptions, util }) => () => {

    const $roleList = el('div', 'role-list visible-false');

    subscriptions.roles.onInsert(roleId => {
        const $role = roleList.roleCustomiser(roleId);
        $roleList.append($role);
    });

    subscriptions.roles.onFirstInsert(() => {
        util.toggleBoolClass($roleList, 'visible', true);
    });

    return $roleList;
    
};
