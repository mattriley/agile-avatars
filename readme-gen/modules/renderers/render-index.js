const _ = require('lodash');
const flatten = require('flat');

module.exports = ({ target }) => async (name, opts = { maxDepth: 2 }) => {

    const keys = Object.keys(flatten(target.composition.modules[name], opts)).sort();
    const half = Math.ceil(keys.length / 2);
    const firstHalf = keys.splice(0, half);
    const secondHalf = keys.splice(-half);
    const z = _.flatten(_.zip(firstHalf, secondHalf)).filter(element => element);
    const chunks = _.chunk(z, 2);
    const lines = chunks.map(items => items.map(item => item.padEnd(48, ' ')).join(''));
    return ['```', ...lines, '```'].join('\n');

};
