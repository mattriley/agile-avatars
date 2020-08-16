module.exports = ({ settings }) => roleId => {

    return roleId === settings.app.getState().nilRoleId;
    
};
