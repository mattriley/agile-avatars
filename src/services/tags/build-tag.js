module.exports = ({ services, core, lib }) => tagData => {

    const pipeline = [
        core.tags.dataTransforms.defaults,
        core.tags.dataTransforms.tagName,
        services.tags.dataTransforms.roleId
    ];

    return lib.util.pipe(pipeline, tagData);
    
};
