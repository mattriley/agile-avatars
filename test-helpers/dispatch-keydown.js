module.exports = ({ window }) => (target, code) => {

    const e = window.document.createEvent('Events');
    e.initEvent('keydown', true, true);
    e.code = code;
    target.dispatchEvent(e);

};