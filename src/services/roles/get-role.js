module.exports = ({ stores }) => roleId => {

    return stores.roles.getState(roleId);

};