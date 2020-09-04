/* eslint-disable no-sync */
const ejs = require('ejs');
const fs = require('fs');
const package = require(process.cwd() + '/package.json');

const yaml = require('js-yaml');

const mapping = {
    'no-hype': 'Decision is not driven by hype or popularity',
    'no-js-alternative': 'No suitable built-in JavaScript alternative exists',
    'not-trivial': 'Not trivial to implement with vanilla JavaScript',
    'no-node-alternative': 'No suitable built-in Node.js equivalent exists',
    'no-closer-match': 'No alternative that more closely matches the need exists',
    'no-fewer-deps': 'No alternative with fewer dependencies exists',
    'widely-used': 'Widely used',
    'usage-isolated': 'Usage is isolated',
    'low-maintenance': 'Low maintenance',
    'low-change': 'Low likelihood of changing in a material way',
    'low-impact': 'Low impact of material change'
};


const doc = yaml.safeLoad(fs.readFileSync(process.cwd() + '/docs/dependencies.yaml', 'utf8'));

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
            if (doc[name]) {
                
                const body = Object.entries(mapping).map(([k, text]) => {
                    const item = doc[name].checklist[k];
                    const checkmark = item.checked ? 'x' : ' ';
                    const comment = item.comment ? `\\\n      <small>${item.comment}</small>` : '';
                    return `- [${checkmark}] ${text}${comment}`;
                }).join('\n');
                return header + `${doc[name]['used-for']}\n` + body;
            } 
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
