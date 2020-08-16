const defaults = require('lodash/defaults');

module.exports = () => tagData => {

    const defaultData = { instances: [], active: [], passive: [] };
    return defaults(defaultData, tagData);
    
};
