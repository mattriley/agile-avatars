/* eslint-disable no-sync */
const fs = require('fs');

module.exports = ({ test, boot }) => {

    test('gets state', () => {
        const { diagnostics } = boot();
        const diagram = diagnostics.diagram();
        fs.writeFileSync('docs/modules.mmd', diagram);
        
    });

};
