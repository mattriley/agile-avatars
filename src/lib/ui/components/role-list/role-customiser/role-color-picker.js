module.exports = ({ el, thirdPartyComponents, services }) => roleId => {

    const role = services.roles.getRole(roleId);

    return thirdPartyComponents.vanillaPicker({
        parent: el('div', 'color-picker'),
        color: role.color,
        onChange: e => services.roles.changeRoleColor(roleId, e.hex)
    });

};
