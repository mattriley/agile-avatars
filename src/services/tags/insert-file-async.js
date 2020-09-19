module.exports = ({ core, services, lib }) => file => {

    const pipeline = [
        core.tags.parseFileExpression,
        services.tags.insertTag,
        services.tags.attachImageAsync(file)
    ];

    return lib.util.pipe(pipeline, file.name);
    
};
