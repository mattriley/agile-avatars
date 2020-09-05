/* eslint-disable no-sync */
const ejs = require('ejs');
const fs = require('fs');
const package = require(process.cwd() + '/package.json');

const composer = require('module-composer');

const compose = composer({ lib: require('./src/readme-gen') });
const lib = compose('lib', { process, fs });

const depdoc = lib.loadDepdoc();

const nodeVersion = lib.getNodeVersion();

const renderDependencies = key => {
    const sections = Object.entries(package[key]).map(([name]) => {
        return lib.renderDependency({ name, depdoc });
    });
    return sections.join('\n');
};

const data = {
    nodeVersion,
    renderJsFile: lib.renderJsFile,
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
