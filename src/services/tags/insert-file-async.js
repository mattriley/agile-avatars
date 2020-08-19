module.exports = ({ core, services }) => file => {

    const tagData = core.tags.parseFileExpression(file.name);
    const tagId = services.tags.insertTag(tagData);
    return services.tags.attachImageAsync(tagId, file);
    
};
