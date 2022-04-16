export default ({ stores }) => (roleId, color) => {

    stores.roles.update(roleId, { color });

};
