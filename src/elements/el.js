module.exports = ({ lib, window }) => (tagName, maybeClassNameOrProps, maybeProps = {}) => {

    const className = typeof maybeClassNameOrProps === 'string' ? maybeClassNameOrProps : undefined;
    const props = maybeClassNameOrProps && !className ? maybeClassNameOrProps : maybeProps;
    if (className) Object.assign(props, { className });
    const el = window.document.createElement(tagName);
    const appendOrig = el.append.bind(el);
    const append = (...args) => { appendOrig(...args); return el; };
    const addEventListenerOrig = el.addEventListener.bind(el);
    const addEventListener = (...args) => { addEventListenerOrig(...args); return el; };
    return lib.util.merge(el, { append, addEventListener, ...props });

};