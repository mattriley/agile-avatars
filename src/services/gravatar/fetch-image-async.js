module.exports = ({ core, io }) => async (emailOrUsername, defaultImage) => {

    const imageUrl = core.gravatar.buildImageUrl(emailOrUsername, defaultImage);
    const response = await io.fetch(imageUrl);
    return response.blob();

};
