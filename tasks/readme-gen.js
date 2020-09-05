const ejs = require('ejs');
const fs = require('fs');
const package = require(process.cwd() + '/package.json');

const { startup, ...src } = require('./src/readme-gen');

const depdoc = startup.loadDepdoc({ process, fs });

const composer = require('module-composer');

const compose = composer(src);
const lib = compose('lib', { depdoc, package, fs, process });

const nodeVersion = lib.getNodeVersion();

const data = {
    nodeVersion,
    renderJsFile: lib.renderJsFile,
    dependencies: {
        constraints: Object.values(depdoc.constraints).map(desc => `- ${desc}`).join('\n'),
        production: lib.renderDependencies('dependencies'),
        development: lib.renderDependencies('devDependencies')
    }
};

ejs.renderFile('README-TEMPLATE.md', data, {}, (err, str) => {
    if (err) throw err;
    process.stdout.write(str);
});
