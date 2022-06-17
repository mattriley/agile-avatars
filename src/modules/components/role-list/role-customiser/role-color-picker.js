export default ({ ui, vendorComponents, services }) => roleId => {

    const role = services.roles.getRole(roleId);

    return vendorComponents.vanillaPicker({
        parent: ui.el('div', 'color-picker'),
        color: role.color,
        onChange: e => services.roles.changeRoleColor(roleId, e.hex)
    });

};
