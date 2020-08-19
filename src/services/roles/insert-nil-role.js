module.exports = ({ config, settings, stores }) => () => {

    const nilRoleId = stores.roles.insert(config.roles.nilRole);
    settings.app.setState({ nilRoleId });
    
};
