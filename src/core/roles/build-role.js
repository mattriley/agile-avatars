module.exports = ({ core, util }) => (roleData, randomNumber) => {

    const transformRoleName = roleData => {
        const roleName = (roleData.roleName || '').trim().toUpperCase();
        return { ...roleData, roleName };
    };

    return util.pipe(
        transformRoleName,
        core.roles.assignColor(randomNumber)
    )(roleData);

};
