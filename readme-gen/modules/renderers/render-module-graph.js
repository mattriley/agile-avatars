const lib = require('task-library/src/lib/readme-gen');

module.exports = ({ target }) => () => {

    const omit = ['config', 'diagnostics', 'startup', 'util', 'vendorComponents', 'vendorServices'];
    return lib.renderCode(target.composition.mermaid({ omit }), 'mermaid');

};
