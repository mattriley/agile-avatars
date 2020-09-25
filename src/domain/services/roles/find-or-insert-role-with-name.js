module.exports = ({ services, stores }) => (roleName = '') => {
    
    const existingRole = stores.roles.list().find(role => roleName.toUpperCase() === role.roleName.toUpperCase());
    return existingRole ? existingRole.id : services.roles.insertRole({ roleName });

};
