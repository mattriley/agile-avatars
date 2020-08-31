/* eslint-disable no-sync */
const ejs = require('ejs');
const fs = require('fs');
const package = require(process.cwd() + '/package.json');

const nodeVersion = fs.readFileSync('.nvmrc', 'utf-8').trim();

const renderDependencies = key => {
    const sections = Object.entries(package[key]).map(([name]) => {
        const package = require(process.cwd() + `/node_modules/${name}/package.json`);
        const header = `
### ${name}

> ${package.description}\\
${package.homepage}
`;
        try {
            return header + fs.readFileSync(`docs/dependencies/${name}.md`, 'utf-8');
        } catch (err) {
            return header;
        }
    });
    return sections.join('\n');
};

const renderJsFile = (path, opts = {}) => {
    const open = opts.open ?? true;
    const code = fs.readFileSync(path, 'utf-8');
    return [
        `<details ${open ? 'open' : ''}>`,
        `<summary>${path}</summary>`,
        '',
        '```js',
        (opts.includeFootnotes ? code : code.split('/*')[0]).trim(),
        '```',
        '</details>'
    ].join('\n');
};

const data = {
    nodeVersion,
    renderJsFile,
    renderDependencies        
};

ejs.renderFile('README-TEMPLATE.md', data, {}, (err, str) => {
    if (err) throw err;
    process.stdout.write(str);
});
