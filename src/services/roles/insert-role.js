module.exports = ({ stores, services, subscriptions }) => roleData => {

    const role = services.roles.buildRole(roleData);

    return stores.roles.insert(role, roleId => {
        subscriptions.roles.onChange(
            roleId, 
            'roleName', 
            services.roles.setupRolePropagation(roleId)
        );
    });

};
