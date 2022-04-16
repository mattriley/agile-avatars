export default (...funcs) => initial => funcs.reduce((v, f) => f(v), initial);
