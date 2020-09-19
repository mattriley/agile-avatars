module.exports = ({ core, lib }) => (roleData, randomColor) => {
    
    return lib.util.pipe(
        () => roleData,
        core.roles.dataTransforms.roleName,
        core.roles.dataTransforms.roleColor(randomColor)
    );

};
