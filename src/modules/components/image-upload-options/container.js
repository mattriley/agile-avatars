export default ({ ui, imageUploadOptions }) => () => {

    return ui.el('div', 'image-upload-options').append(
        ui.el('span', { textContent: 'Drag & drop images' }),
        imageUploadOptions.chooseImages(),
        imageUploadOptions.gravatar()
    );

};
