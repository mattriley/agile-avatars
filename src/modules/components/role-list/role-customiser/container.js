export default ({ ui, components, services }) => roleId => {

    const $masterRoleName = components.roleList.roleCustomiser.masterRoleName(roleId);
    const $colorPicker = components.roleList.roleCustomiser.roleColorPicker(roleId);

    const isNilRole = services.roles.isNilRole(roleId);

    return ui.el('span', `role-customiser role${roleId}`, { hidden: isNilRole })
        .append($masterRoleName, $colorPicker);

};
