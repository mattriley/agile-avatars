const lib = require('task-library/src/lib/readme-gen');

module.exports = ({ targetDir }) => () => {

    const omit = ['config', 'diagnostics', 'startup', 'util', 'vendorComponents', 'vendorServices'];

    return lib.compose(c => lib.renderCode(c.mermaid({ omit }), 'mermaid'), `${targetDir}/src/compose.js`);


    // const { mermaid } = compose({});
    // return [
    //     '```mermaid',
    //     mermaid({ omit: ['config', 'diagnostics', 'el', 'startup', 'util', 'vendorComponents', 'vendorServices'] }),
    //     '```',
    // ].join('\n');


};
