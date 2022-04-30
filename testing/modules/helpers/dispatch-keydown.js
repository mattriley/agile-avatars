export default ({ window }) => (target, code) => {

    const e = new window.Event('Events');
    e.initEvent('keydown', true, true);
    e.code = code;
    target.dispatchEvent(e);

};
