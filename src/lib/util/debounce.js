module.exports = (func, wait) => {

    if (!wait) return func;

    let timeout = null;
    
    return (...args) => {
        const next = () => func(...args);
        clearTimeout(timeout);
        timeout = setTimeout(next, wait);
    };
    
};
