const compose = require('./compose');
const getTemplateData = require('./get-template-data');
const lib = require('task-library/src/lib/readme-gen');
const path = require('path');
const YAML = require('yaml');
const fs = require('fs');
const _ = require('lodash');
const glob = require('fast-glob');
const ejs = require('ejs');

const start = async () => {

    const constraintsFile = fs.readFileSync('./readme-gen/assets/dependencies/constraints.yaml', 'utf8');
    const dependencyConstraints = YAML.parse(constraintsFile);

    const loadDependencies = () => {
        const dependenciesFile = fs.readFileSync('./readme-gen/assets/dependencies/dependencies.yaml', 'utf8');
        const dependencies = YAML.parse(dependenciesFile);
        const packages = _.mapValues(dependencies, (val, name) => {
            try {
                return JSON.parse(fs.readFileSync(`./node_modules/${name}/package.json`, 'utf8'));
            }
            catch (err) {
                // some don't have package.json?
                return {};
            }
        });

        return { dependencies, packages };
    };

    const dependencies = await loadDependencies();


    const target = {
        package: require(path.resolve('./package.json')),
        composition: await lib.compose(c => c),
        dependencies,
        dependencyConstraints
    };

    const io = { fs, glob, ejs };
    const { modules } = compose({ io, target });
    const { renderers } = modules;
    const templateData = await getTemplateData({ renderers });
    await lib.renderFile('./README-TEMPLATE.md', templateData);
};

start();
