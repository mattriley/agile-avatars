module.exports = ({ core, io }) => async (emailOrUsername, defaultImage) => {

    const imageUrl = core.gravatar.buildImageUrl(emailOrUsername, defaultImage);
    const response = await io.fetch(imageUrl);
    if (!response.ok) throw new Error(`Unexpected Gravatar response status ${response.status}.`);
    return response.blob();

};
