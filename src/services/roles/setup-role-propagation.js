module.exports = ({ stores }) => roleId => () => {

    const { roleName } = stores.roles.find(roleId);
    const changes = { roleName };
    const matchRole = tagInstance => tagInstance.roleId === roleId;
    const setRoleName = tagInstance => stores.tagInstances.update(tagInstance.id, changes);
    stores.tagInstances.list().filter(matchRole).forEach(setRoleName);

};
