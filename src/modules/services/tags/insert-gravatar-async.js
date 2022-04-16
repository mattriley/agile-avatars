export default ({ core, services }) => (expression, defaultImage) => {

    const { email, username, emailOrUsername, roleName } = core.tags.parseEmailExpression(expression);

    const profilePromise = services.gravatar.fetchProfileAsync(email).then(profile => {
        const tagName = core.gravatar.getNameFromProfile(profile, username);
        return services.tags.insertTag({ tagName, roleName });
    });

    return services.gravatar.fetchImageAsync(emailOrUsername, defaultImage).then(async imageBlob => {
        const tagId = await profilePromise;
        return services.tags.attachImageAsync(imageBlob)(tagId);
    });

};
