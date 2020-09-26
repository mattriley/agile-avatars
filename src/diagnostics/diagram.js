const sortBy = require('lodash/sortBy');

module.exports = ({ rels, util }) => () => {

    const ignore = ['startup', 'el', 'gtag', 'storage', 'diagnostics', 'util', 'ui', 'config', 'vendor', 'vendorComponents'];

    const final = util.mapValues(rels, arr => {
        return arr.filter(item => !ignore.includes(item));
    });

    ignore.forEach(key => {
        delete final[key];
    });

    const pairs = Object.entries(final).flatMap(([key, deps]) => {
        return deps.map(dep => {
            return [key, dep];
        });
    });

    const sortedPairs = sortBy(pairs, pair => pair[1]);

    const lines = sortedPairs.map(([key, dep]) => {
        return `    ${key}-->${dep};`;
    });

    return 'graph TD;\n' + lines.join('\n');

};