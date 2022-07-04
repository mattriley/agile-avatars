const path = require('path');

module.exports = () => () => {

    return require(path.resolve('./package.json'));

};
