module.exports = ({ core, services }) => async (expression, defaultImage) => {

    const { email, username, emailOrUsername, roleName } = core.tags.parseEmailExpression(expression);
    
    const profile = await services.gravatar.fetchProfileAsync(email);
    const tagName = core.gravatar.getNameFromProfile(profile, username);
    const tagId = services.tags.insertTag({ tagName, roleName });

    const imageBlob = await services.gravatar.fetchImageAsync(emailOrUsername, defaultImage);
    return services.tags.attachImageAsync(imageBlob)(tagId);

};
