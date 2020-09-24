module.exports = ({ core, lib }) => (roleData, randomNumber) => {
    
    const transformRoleName = roleData => {
        const roleName = (roleData.roleName ?? '').trim().toUpperCase();
        return { ...roleData, roleName };
    };

    return lib.util.pipe(
        transformRoleName,
        core.roles.assignColor(randomNumber)
    )(roleData);

};
