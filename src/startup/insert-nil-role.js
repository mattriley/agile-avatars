module.exports = ({ config, stores }) => {

    const nilRoleId = stores.roles.insert(config.roles.nilRole);
    stores.settings.setState('app', { nilRoleId });
    
};
