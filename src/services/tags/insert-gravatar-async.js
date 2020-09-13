module.exports = ({ core, services }) => async (expression, defaultImage) => {

    const { tagName: username, email, roleName } = core.tags.parseEmailExpression(expression);
    const emailOrUsername = email ?? username;
    
    const profile = await services.gravatar.fetchProfileAsync(emailOrUsername);
    const tagName = core.gravatar.getNameFromProfile(profile, username);
    const tagId = services.tags.insertTag({ tagName, roleName });

    const imageBlob = await services.gravatar.fetchImageAsync(emailOrUsername, defaultImage);
    return services.tags.attachImageAsync(tagId, imageBlob);

};
