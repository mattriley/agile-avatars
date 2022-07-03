const sortBy = require('lodash/sortBy');
module.exports = ({ composition }) => async ({ include }) => {

    const { dependencies } = composition;

    const pairs = Object.entries(dependencies)
        .filter(([key]) => include.includes(key))
        .map(([key, deps]) => [key, deps.filter(dep => include.includes(dep))])
        .flatMap(([key, deps]) => deps.map(dep => [key, dep]));

    const sortedPairs = sortBy(pairs, pair => pair[1]);
    const lines = sortedPairs.map(([key, dep]) => `    ${key}-->${dep};`);
    return ['graph TD;', ...lines].join('\n');

};
