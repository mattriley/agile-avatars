const path = require('path');
const sortBy = require('lodash/sortBy');

module.exports = ({ targetDir, bootAgileAvatars: boot }) => ({ include }) => {

    // const boot = require(path.resolve(targetDir, 'boot'));
    // const boot = require(path.resolve(targetDir, 'src/boot'));
    // const { default: boot } = await import(path.resolve(targetDir, 'src/boot'))

    // const configPath = path.resolve(targetDir, 'src/data/config.json');
    // const config = require(configPath);

    const { dependencies } = boot({});
    // const include = ['subscriptions', 'components', 'elements', 'styles', 'ui', , 'io', 'services', 'core', 'stores', 'window'];

    const pairs = Object.entries(dependencies)
        .filter(([key]) => include.includes(key))
        .map(([key, deps]) => [key, deps.filter(dep => include.includes(dep))])
        .flatMap(([key, deps]) => deps.map(dep => [key, dep]));

    const sortedPairs = sortBy(pairs, pair => pair[1]);
    const lines = sortedPairs.map(([key, dep]) => `    ${key}-->${dep};`);
    return ['graph TD;', ...lines].join('\n');

}
