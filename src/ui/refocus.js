module.exports = ({ window }) => cb => {
    
    const el = window.document.activeElement;
    cb();
    el.focus();

};
