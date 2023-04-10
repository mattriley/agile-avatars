export default ({ ui, components }) => () => {

    return ui.el('div', 'image-upload-options').append(
        ui.el('span', { textContent: 'Drag & drop images' }),
        components.imageUploadOptions.chooseImages(),
        components.imageUploadOptions.gravatar()
    );

};
