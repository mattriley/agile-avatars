module.exports = ({ services, core, lib }) => tagData => {

    const pipeline = [
        core.tags.dataTransforms.defaults,
        core.tags.dataTransforms.tagName,
        services.tags.dataTransforms.roleName
    ];

    return lib.util.pipe(pipeline, tagData);
    
};
