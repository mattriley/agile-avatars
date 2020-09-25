const createStores = require('./create-stores');

module.exports = ({ util, config }) => {
    return createStores({ util, config });
};
