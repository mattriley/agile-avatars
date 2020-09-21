module.exports = (initial, ...funcs) => funcs.reduce((v, f) => f(v), initial);
