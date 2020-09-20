module.exports = (...fns) => fns.reduce((v, f) => (typeof f === 'function' ? f(v) : f), undefined);
