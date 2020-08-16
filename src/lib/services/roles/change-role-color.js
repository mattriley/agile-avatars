module.exports = ({ stores }) => (roleId, color) => {

    stores.roles.setState(roleId, { color });

};