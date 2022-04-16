export default ({ core, services, util }) => file => {

    return util.pipe(
        core.tags.parseFileExpression,
        services.tags.insertTag,
        services.tags.attachImageAsync(file)
    )(file.name);

};
