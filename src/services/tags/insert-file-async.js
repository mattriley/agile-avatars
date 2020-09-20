module.exports = ({ core, services, lib }) => file => {

    return lib.util.pipe(
        file.name,
        core.tags.parseFileExpression,
        services.tags.insertTag,
        services.tags.attachImageAsync(file)
    );
    
};
