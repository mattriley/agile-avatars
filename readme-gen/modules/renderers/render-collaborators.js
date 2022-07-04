const _ = require('lodash');

module.exports = ({ target }) => async ({ moduleName }) => {

    const { dependencies } = target.composition;

    dependencies.window = [];

    const keys = Object.keys(dependencies);

    let names = _.sortBy(Object.keys(dependencies), name => {
        const deps = dependencies[name].filter(n => keys.includes(n)); // because will contain more than modules (e.g. el, window)
        return deps.length;
    }).reverse();


    const rows = names.map(name => {

        const _names = names; //.filter(n => n !== name)

        // e.g. removes startup depends on startup (but not working!)
        const deps = dependencies[name]; //.filter(d => d !== name);

        const allowed = deps.filter(n => {
            return _names.includes(n);
        });

        const notAllowed = _names.filter(n => {
            return !deps.includes(n);
        });


        return {
            name,
            allowed: allowed.sort().filter(n => n !== name),
            notAllowed: notAllowed.sort().filter(n => n !== name)
        };

    });



    const name = moduleName;
    const row = rows.find(row => _.camelCase(row.name) === _.camelCase(name));
    const allowed = row ? row.allowed.join(' ') : '';
    const notAllowed = row ? row.notAllowed.join(' ') : '';

    const lines = [
        '```diff\n+ ' + allowed + '\n- ' + notAllowed + '\n```',
    ];

    return lines.join('\n');

};