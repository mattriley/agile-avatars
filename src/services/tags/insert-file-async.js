module.exports = ({ core, services, lib }) => file => {

    return lib.util.pipe(
        core.tags.parseFileExpression(file.name),
        services.tags.insertTag,
        services.tags.attachImageAsync(file)
    );
    
};
