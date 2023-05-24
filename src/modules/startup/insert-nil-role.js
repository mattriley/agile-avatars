export default ({ constants, stores }) => () => {

    const nilRoleId = stores.roles.insert(constants.roles.nilRole);
    stores.settings.update('app', { nilRoleId });

};
