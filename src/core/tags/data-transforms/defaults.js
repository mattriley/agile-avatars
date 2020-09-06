const merge = require('lodash/merge');

module.exports = () => tagData => {

    const defaultData = { instances: [], active: [], passive: [] };
    return merge(defaultData, tagData);
    
};
