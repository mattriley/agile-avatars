module.exports = (...fns) => initial => fns.reduce((v, f) => f(v), initial);


// module.exports = (fns, initial) => fns.reduce((v, f) => f(v), initial);
