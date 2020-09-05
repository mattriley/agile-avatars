const fs = require('fs');
const ejs = require('ejs');
const composer = require('module-composer');
const { startup, ...src } = require('./src/readme-gen');

const packageRoot = process.cwd();
const package = require(`${packageRoot}/package.json`);
const depdoc = startup.loadDepdoc({ packageRoot, fs });

const compose = composer(src);
const lib = compose('lib', { packageRoot, package, depdoc, fs });

const data = lib.getTemplateData();

ejs.renderFile('README-TEMPLATE.md', data, {}, (err, str) => {
    if (err) throw err;
    process.stdout.write(str);
});
