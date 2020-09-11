module.exports = ({ stores }) => () => {

    return stores.settings.getState('app').nilRoleId;
    
};
