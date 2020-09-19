module.exports = ({ services, core, lib }) => roleData => {
    
    return lib.util.pipe(
        core.roles.dataTransforms.roleName,
        core.roles.dataTransforms.color(services.roles.randomColor())
    )(roleData);

};