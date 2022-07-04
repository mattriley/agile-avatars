const lib = require('task-library/src/lib/readme-gen');

module.exports = ({ composition }) => () => {

    const omit = ['config', 'diagnostics', 'startup', 'util', 'vendorComponents', 'vendorServices'];
    return lib.renderCode(composition.mermaid({ omit }), 'mermaid');

};
