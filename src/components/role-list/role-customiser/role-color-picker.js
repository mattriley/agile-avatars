module.exports = ({ el, services, vendor }) => roleId => {

    const role = services.roles.getRole(roleId);

    return vendor.components.vanillaPicker({
        parent: el('div', 'color-picker'),
        color: role.color,
        onChange: e => services.roles.changeRoleColor(roleId, e.hex)
    });

};
