const upperFirst = require('lodash/upperFirst');

module.exports = () => tagData => {

    const tagName = upperFirst((tagData.tagName ?? '').trim());
    return { ...tagData, tagName };
    
};
