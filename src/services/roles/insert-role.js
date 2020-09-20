module.exports = ({ core, services, subscriptions, stores, io }) => roleData => {

    const role = core.roles.buildRole(roleData, io.random());

    return stores.roles.insert(role, roleId => {
        subscriptions.roles.onChange(roleId, 'roleName', services.roles.setupRolePropagation(roleId));
    });

};
