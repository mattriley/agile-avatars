module.exports = ({ stores }) => roleId => () => {

    const { roleName } = stores.roles.getState(roleId);
    const changes = { roleName };
    const matchRole = instance => instance.roleId === roleId;
    const setRoleName = instance => stores.tagInstances.setState(instance.id, changes);
    stores.tagInstances.getArray().filter(matchRole).forEach(setRoleName);

};
