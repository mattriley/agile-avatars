module.exports = ({ stores, io }) => imageBlob => tagId => {
    
    return new Promise((resolve, reject) => {
        const reader = io.createFileReader();
        reader.readAsDataURL(imageBlob);
        reader.addEventListener('load', () => {
            const image = reader.result;
            stores.tags.update(tagId, { image });
            resolve();
        });
        reader.addEventListener('error', () => {
            reject(reader.error);
        });
    });

};
