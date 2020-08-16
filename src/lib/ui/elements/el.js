const merge = require('lodash/merge');

module.exports = ({ window }) => (tagName, maybeClassNameOrProps, maybeProps = {}) => {

    const className = typeof maybeClassNameOrProps === 'string' ? maybeClassNameOrProps : undefined;
    const props = maybeClassNameOrProps && !className ? maybeClassNameOrProps : maybeProps;
    const el = window.document.createElement(tagName);
    const appendOrig = el.append.bind(el);
    const append = (...args) => { appendOrig(...args); return el; };
    const addEventListenerOrig = el.addEventListener.bind(el);
    const addEventListener = (...args) => { addEventListenerOrig(...args); return el; };
    return merge(el, { append, addEventListener, className, ...props });

};