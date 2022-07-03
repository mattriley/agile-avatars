const lib = require('task-library/src/lib/readme-gen');

module.exports = () => filePath => {
    return lib.renderCode(lib.fetchCode(filePath));
};
