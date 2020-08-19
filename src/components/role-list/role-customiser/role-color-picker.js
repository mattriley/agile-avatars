module.exports = ({ el, components, services }) => roleId => {

    const role = services.roles.getRole(roleId);

    return components.vanillaPicker({
        parent: el('div', 'color-picker'),
        color: role.color,
        onChange: e => services.roles.changeRoleColor(roleId, e.hex)
    });

};
