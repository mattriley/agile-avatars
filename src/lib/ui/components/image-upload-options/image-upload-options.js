module.exports = ({ el, imageUploadOptions }) => () => {

    return el('div', 'image-upload-options').append(
        el('span', { textContent: 'Drag & drop images' }),
        imageUploadOptions.chooseImages(),
        imageUploadOptions.gravatar()
    );

};
