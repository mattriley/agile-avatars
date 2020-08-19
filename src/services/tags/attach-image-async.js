module.exports = ({ stores, io }) => async (tagId, imageBlob) => {
    
    const image = await new Promise(resolve => {
        const reader = io.createFileReader();
        reader.addEventListener('load', () => resolve(reader.result));
        reader.readAsDataURL(imageBlob);
    });

    stores.tags.setState(tagId, { image });

};
