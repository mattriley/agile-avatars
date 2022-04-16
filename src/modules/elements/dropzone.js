export default ({ el }) => () => {

    const preventDefault = e => e.preventDefault();

    return el('div', 'dropzone')
        .addEventListener('dragenter', preventDefault)
        .addEventListener('dragover', preventDefault)
        .addEventListener('drop', preventDefault);

};
