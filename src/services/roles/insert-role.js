module.exports = ({ stores, services, subscriptions, core }) => roleData => {

    const randomColor = services.roles.randomColor();
    
    const role = core.roles.buildRole(roleData, randomColor);

    return stores.roles.insert(role, roleId => {
        subscriptions.roles.onChange(roleId, 'roleName', services.roles.setupRolePropagation(roleId));
    });

};
