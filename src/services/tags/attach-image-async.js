module.exports = ({ stores, io }) => imageBlob => async tagId => {
    
    const image = await new Promise(resolve => {
        const reader = io.createFileReader();
        reader.addEventListener('load', () => resolve(reader.result));
        reader.readAsDataURL(imageBlob);
    });

    stores.tags.update(tagId, { image });

};
