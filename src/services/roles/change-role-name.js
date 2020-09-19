module.exports = ({ core, stores }) => (roleId, roleName) => {

    const oldState = stores.roles.getState(roleId);
    const newState = core.roles.buildRole({ ...oldState, roleName });
    stores.roles.update(roleId, newState);
    
};
