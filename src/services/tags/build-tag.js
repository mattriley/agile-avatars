module.exports = ({ services, core, lib }) => tagData => {

    return lib.util.pipe(
        core.tags.dataTransforms.defaults(tagData),
        core.tags.dataTransforms.tagName,
        services.tags.dataTransforms.roleId
    );
    
};
