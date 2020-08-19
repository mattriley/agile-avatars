const debounce = require('lodash/debounce');

module.exports = ({ config }) => (func, configKey) => {
    const wait = config.debounce[configKey];
    return wait ? debounce(func, wait) : func;
};
