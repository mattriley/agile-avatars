const path = require('path');
const sortBy = require('lodash/sortBy');
const { JSDOM } = require('jsdom');
const boot = require(path.resolve(process.cwd(), 'boot'));

const { window } = new JSDOM('', { url: 'https://localhost/' });
const { __dependencies } = boot({ window });

const include = ['styles', 'components', 'elements', 'subscriptions', 'services', 'stores', 'core', 'io', 'window'];

const pairs = Object.entries(__dependencies)
    .filter(([key]) => include.includes(key))
    .map(([key, deps]) => [key, deps.filter(dep => include.includes(dep))])
    .flatMap(([key, deps]) => deps.map(dep => [key, dep]));

const sortedPairs = sortBy(pairs, pair => pair[1]);
const lines = sortedPairs.map(([key, dep]) => `    ${key}-->${dep};`);
const definition = ['graph TD;', ...lines].join('\n');
console.log(definition);
