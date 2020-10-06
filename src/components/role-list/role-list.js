module.exports = ({ el, roleList, subscriptions, dom }) => () => {

    const $roleList = el('div', 'role-list visible-false');

    subscriptions.roles.onInsert(roleId => {
        const $role = roleList.roleCustomiser(roleId);
        $roleList.append($role);
    });

    subscriptions.roles.onFirstInsert(() => {
        dom.toggleBoolClass($roleList, 'visible', true);
    });

    return $roleList;
    
};
