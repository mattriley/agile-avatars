const debounce = require('lodash/debounce');

module.exports = (func, wait) => {

    return wait ? debounce(func, wait) : func;
    
};
