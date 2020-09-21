module.exports = (f1, ...fx) => fx.reduce((v, f) => f(v), typeof f1 === 'function' ? f1() : f1);
