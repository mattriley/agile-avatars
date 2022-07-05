module.exports = ({ target }) => async ({ moduleName }) => {

    const { dependencies } = target.composition;
    const names = Object.keys(dependencies);

    const rows = names.map(name => {
        const deps = dependencies[name];
        const allowed = deps.filter(n => names.includes(n)).sort().filter(n => n !== name);
        const notAllowed = names.filter(n => !deps.includes(n)).sort().filter(n => n !== name);
        return { name, allowed, notAllowed };
    });

    const row = rows.find(row => row.name === moduleName);
    const allowed = row ? row.allowed.join(' ') : '';
    const notAllowed = row ? row.notAllowed.join(' ') : '';
    return '```diff\n+ ' + allowed + '\n- ' + notAllowed + '\n```';

};
