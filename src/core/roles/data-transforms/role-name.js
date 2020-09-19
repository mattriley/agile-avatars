module.exports = () => roleData => () => {

    const roleName = (roleData.roleName ?? '').trim().toUpperCase();
    return { ...roleData, roleName };

};
