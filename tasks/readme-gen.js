/* eslint-disable no-sync */
const ejs = require('ejs');
const fs = require('fs');
const package = require(process.cwd() + '/package.json');

const renderJsFile = require('./readme-gen-src/render-js-file')({ fs });

const yaml = require('js-yaml');

const depdoc = yaml.safeLoad(fs.readFileSync(process.cwd() + '/docs/dependencies.yaml', 'utf8'));

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
            if (depdoc.dependencies[name]) {
                
                const body = Object.entries(depdoc.dependencies[name].comments).map(([k, comment]) => {
                    const constraint = depdoc.constraints[k];
                    return `- __${constraint}__\\\n${comment}\n`;
                }).join('\n');
                return header + `${depdoc.dependencies[name]['used-for']}\n\n` + body;
            } 
            return header + fs.readFileSync(`docs/dependencies/${name}.md`, 'utf-8');
            
        } catch (err) {
            return header;
        }
    });
    return sections.join('\n');
};

const data = {
    nodeVersion,
    renderJsFile,
    dependencies: {
        constraints: Object.values(depdoc.constraints).map(desc => `- ${desc}`).join('\n'),
        production: renderDependencies('dependencies'),
        development: renderDependencies('devDependencies')
    }
};

ejs.renderFile('README-TEMPLATE.md', data, {}, (err, str) => {
    if (err) throw err;
    process.stdout.write(str);
});
