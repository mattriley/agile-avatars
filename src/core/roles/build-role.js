module.exports = ({ core, lib }) => (roleData, randomColor) => {
    
    return lib.util.pipe(
        core.roles.dataTransforms.roleName(roleData),
        core.roles.dataTransforms.roleColor(randomColor)
    );

};
