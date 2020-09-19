module.exports = ({ services, core, lib }) => tagData => {

    return lib.util.pipe(
        () => tagData,
        core.tags.dataTransforms.defaults,
        core.tags.dataTransforms.tagName,
        services.tags.dataTransforms.roleId
    );
    
};
