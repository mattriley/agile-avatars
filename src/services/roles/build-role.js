module.exports = ({ services, core, lib }) => roleData => {
    
    const pipeline = [
        core.roles.dataTransforms.roleName,
        core.roles.dataTransforms.color(services.roles.randomColor())
    ];

    return lib.util.pipe(pipeline, roleData);

};