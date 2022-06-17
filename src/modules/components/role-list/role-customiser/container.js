export default ({ ui, roleCustomiser, services }) => roleId => {

    const $masterRoleName = roleCustomiser.masterRoleName(roleId);
    const $colorPicker = roleCustomiser.roleColorPicker(roleId);

    const isNilRole = services.roles.isNilRole(roleId);

    return ui.el('span', `role-customiser role${roleId}`, { hidden: isNilRole })
        .append($masterRoleName, $colorPicker);

};
