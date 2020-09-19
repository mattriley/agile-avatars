module.exports = (...fns) => fns.reduce((v, f) => f(v), undefined);
