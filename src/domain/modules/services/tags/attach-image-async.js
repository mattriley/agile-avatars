module.exports = ({ stores, io }) => imageBlob => async tagId => {
    
    const image = await io.readAsDataUrlAsync(imageBlob);
    stores.tags.update(tagId, { image });

};
