const sortBy = require('lodash/sortBy');
const _ = require('lodash');

module.exports = ({ composition }) => () => {

    const { dependencies } = composition;

    dependencies.window = [];

    const keys = Object.keys(dependencies);

    let names = sortBy(Object.keys(dependencies), name => {
        const deps = dependencies[name].filter(n => keys.includes(n)); // because will contain more than modules (e.g. el, window)
        return deps.length;
    }).reverse();


    let titles = names.map(n => _.kebabCase(n).replace('-', '<br>'));



    const rows = names.map(name => {

        const res = names.map(n => {
            if (n === name) return 'n/a';
            const deps = dependencies[n];
            return deps.includes(name) ? '✅' : '❌';
        });

        const title = name; //_.kebabCase(name).replace('-', ' ')
        return [title, ...res].join(' | ');

    });

    const header = ['Modules', ...titles].join(' | ');
    const line = '--- | ' + titles.map(n => ':---:').join(' | ');

    const allRows = [header, line, ...rows];

    const res = allRows.join('\n');

    return res;

};
