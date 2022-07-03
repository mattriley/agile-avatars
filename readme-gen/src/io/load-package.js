const path = require('path');

module.exports = ({ targetDir }) => () => {

    return require(path.resolve(targetDir, 'package.json'));

};
