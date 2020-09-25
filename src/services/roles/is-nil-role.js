module.exports = ({ services }) => roleId => {

    return roleId === services.roles.getNilRoleId();
    
};
