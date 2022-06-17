export default ({ ui }) => () => {

    const preventDefault = e => e.preventDefault();

    return ui.el('div', 'dropzone')
        .addEventListener('dragenter', preventDefault)
        .addEventListener('dragover', preventDefault)
        .addEventListener('drop', preventDefault);

};
