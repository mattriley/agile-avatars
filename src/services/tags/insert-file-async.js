module.exports = ({ core, services, lib }) => file => {

    return lib.util.pipe(
        core.tags.parseFileExpression,
        services.tags.insertTag,
        services.tags.attachImageAsync(file)
    )(file.name);
    
};
