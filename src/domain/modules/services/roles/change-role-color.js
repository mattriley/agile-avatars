module.exports = ({ stores }) => (roleId, color) => {

    stores.roles.update(roleId, { color });

};