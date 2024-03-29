export default ({ core, stores }) => (roleId, roleName) => {

    const oldState = stores.roles.find(roleId);
    const newState = core.roles.buildRole({ ...oldState, roleName });
    stores.roles.update(roleId, newState);

};
