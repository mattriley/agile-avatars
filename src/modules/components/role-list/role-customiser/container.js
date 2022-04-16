export default ({ el, roleCustomiser, services }) => roleId => {

    const $masterRoleName = roleCustomiser.masterRoleName(roleId);
    const $colorPicker = roleCustomiser.roleColorPicker(roleId);

    const isNilRole = services.roles.isNilRole(roleId);

    return el('span', `role-customiser role${roleId}`, { hidden: isNilRole })
        .append($masterRoleName, $colorPicker);

};
