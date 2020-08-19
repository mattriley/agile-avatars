module.exports = ({ core, io }) => async (email, defaultImage) => {

    const imageUrl = core.gravatar.buildImageUrl(email, defaultImage);
    const response = await io.fetch(imageUrl);
    return response.blob();

};
