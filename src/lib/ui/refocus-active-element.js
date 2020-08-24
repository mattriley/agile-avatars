module.exports = (window, callback) => {

    const { activeElement } = window.document;
    callback();
    activeElement.focus();
    
};
