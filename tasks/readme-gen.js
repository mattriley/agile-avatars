const fs = require('fs');
const ejs = require('ejs');
const composer = require('module-composer');
const { startup, ...src } = require('./src/readme-gen');

const packageRoot = process.cwd();
const package = require(`${packageRoot}/package.json`);
const depdoc = startup.loadDepdoc({ packageRoot, fs });

const compose = composer(src);
const { renderReadme } = compose('lib', { packageRoot, package, depdoc, ejs, fs });
renderReadme(readme => process.stdout.write(readme));
