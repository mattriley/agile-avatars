module.exports = ({ services, stores }) => (roleId, roleName) => {

    const oldState = stores.roles.getState(roleId);
    const newState = services.roles.buildRole({ ...oldState, roleName });
    stores.roles.setState(roleId, newState);
    
};
