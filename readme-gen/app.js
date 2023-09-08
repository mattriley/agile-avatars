const compose = require('./compose');
const _readmeGenLib = require('task-library/src/node/lib/readme-gen');
const path = require('path');
const YAML = require('yaml');
const fs = require('fs');
const _ = require('lodash');
const glob = require('fast-glob');
const ejs = require('ejs');

const fsp = fs.promises;

const start = async () => {

    const readmeGenLib = _readmeGenLib();

    const constraintsFile = await fsp.readFile('./readme-gen/assets/dependencies/constraints.yaml', 'utf8');
    const dependencyConstraints = YAML.parse(constraintsFile);

    const loadDependencies = async () => {
        const dependenciesFile = await fsp.readFile('./readme-gen/assets/dependencies/dependencies.yaml', 'utf8');
        const dependencies = YAML.parse(dependenciesFile);
        const packages = _.mapValues(dependencies, (val, name) => {
            try {
                return require(path.resolve(`./node_modules/${name}/package.json`));
            }
            catch (err) {
                // some don't have package.json?
                return {};
            }
        });

        return { dependencies, packages };
    };

    const dependencies = await loadDependencies();

    const loadTemplates = async pattern => {
        const templateFiles = await glob(pattern);
        return templateFiles.reduce((acc, f) => {
            const template = fs.readFileSync(f, 'utf-8');
            const { name } = path.parse(f);
            return Object.assign(acc, { [name]: template });
        }, {});
    };

    const moduleTemplates = await loadTemplates('./readme-gen/assets/modules/*.md');


    const target = {
        package: require(path.resolve('./package.json')),
        composition: await readmeGenLib.compose(c => c.composition),
        dependencies,
        dependencyConstraints,
        moduleTemplates
    };

    const io = { fs, glob, ejs };
    const { renderers } = compose({ readmeGenLib, io, target });
    // await readmeGenLib.renderFile(renderers);
    return readmeGenLib.renderFile(renderers);
};

start();
