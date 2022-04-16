export default ({ stores, io }) => imageBlob => tagId => {

    return new Promise((resolve, reject) => {
        const reader = io.fileReader();
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
