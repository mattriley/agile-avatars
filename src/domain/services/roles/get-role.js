module.exports = ({ stores }) => roleId => {

    return stores.roles.find(roleId);

};