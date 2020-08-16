module.exports = ({ el, services }) => () => {

    const $fileInput = el('input', {
        type: 'file',
        multiple: true,
        accept: 'image/*'
    }).addEventListener('change', e => {
        services.tags.insertFileBatchAsync(e.target.files);
    });

    const $chooseImages = el('a', { textContent: 'Choose images' })
        .addEventListener('click', e => {
            e.preventDefault();
            $fileInput.click();
            e.fileInput = $fileInput;
        });

    return el('span').append($chooseImages);

};

/* FOOTNOTES

- Interestingly, file input can be triggered which detached from the DOM.
- File input is assigned to click event to make it accessible to tests via event propagation.

*/
