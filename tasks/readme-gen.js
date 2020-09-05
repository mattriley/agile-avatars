/* eslint-disable no-sync */
const ejs = require('ejs');
const fs = require('fs');
const package = require(process.cwd() + '/package.json');

const renderJsFile = require('./readme-gen-src/render-js-file')({ fs });

const yaml = require('js-yaml');

const depdoc = yaml.safeLoad(fs.readFileSync(process.cwd() + '/docs/dependencies.yaml', 'utf8'));

const nodeVersion = fs.readFileSync('.nvmrc', 'utf-8').trim();

const renderDependency = require('./readme-gen-src/render-dependency')({ process, depdoc });


const renderDependencies = key => {
    const sections = Object.entries(package[key]).map(([name]) => {
        return renderDependency(name);
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
