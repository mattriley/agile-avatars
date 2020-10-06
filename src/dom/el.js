module.exports = ({ dom }) => (tagName, ...opts) => { 

    const el = dom.getDocument().createElement(tagName);
    const props = opts.map(opt => (typeof opt === 'string' ? { className: opt } : opt));
    const funcs = ['append', 'addEventListener'].map(name => {
        const orig = el[name].bind(el);
        const func = (...args) => { orig(...args); return el; };
        return { [name]: func };
    });
    return Object.assign(el, ...props, ...funcs);

};
