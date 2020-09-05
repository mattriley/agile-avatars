/* eslint-disable no-sync */
const ejs = require('ejs');
const fs = require('fs');
const package = require(process.cwd() + '/package.json');

const composer = require('module-composer');

const compose = composer({ lib: require('./src/readme-gen') });
const lib = compose('lib', { package, fs, process });

const depdoc = lib.loadDepdoc();

const nodeVersion = lib.getNodeVersion();

const data = {
    nodeVersion,
    renderJsFile: lib.renderJsFile,
    dependencies: {
        constraints: Object.values(depdoc.constraints).map(desc => `- ${desc}`).join('\n'),
        production: lib.renderDependencies({ packageKey: 'dependencies', depdoc }),
        development: lib.renderDependencies({ packageKey: 'devDependencies', depdoc })
    }
};

ejs.renderFile('README-TEMPLATE.md', data, {}, (err, str) => {
    if (err) throw err;
    process.stdout.write(str);
});
