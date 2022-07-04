const compose = require('./compose');
const getTemplateData = require('./get-template-data');
const lib = require('task-library/src/lib/readme-gen');
const path = require('path');
const YAML = require('yaml');
const fs = require('fs');

const start = async () => {

    const constraintsFile = fs.readFileSync('./readme-gen/assets/dependencies/constraints.yaml', 'utf8');
    const dependencyConstraints = YAML.parse(constraintsFile);

    const target = {
        package: require(path.resolve('./package.json')),
        composition: await lib.compose(c => c),
        dependencyConstraints
    };

    const { modules } = compose({ target });
    const { io, renderers } = modules;

    const templateData = await getTemplateData({ target, io, renderers });
    await lib.renderFile('./README-TEMPLATE.md', templateData);
};

start();
