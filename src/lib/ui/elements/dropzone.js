module.exports = ({ elements }) => () => {

    const preventDefault = e => e.preventDefault();
    
    return elements.el('div', 'dropzone')
        .addEventListener('dragenter', preventDefault)
        .addEventListener('dragover', preventDefault)
        .addEventListener('drop', preventDefault);
        
};
