module.exports = ({ services, core, lib }) => roleData => {
    
    return lib.util.pipe(
        core.roles.dataTransforms.roleName(roleData),
        core.roles.dataTransforms.color(services.roles.randomColor())
    );

};