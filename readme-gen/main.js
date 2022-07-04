const compose = require('./compose');
const getTemplateData = require('./get-template-data');
const lib = require('task-library/src/lib/readme-gen');
const path = require('path');

const start = async () => {
    const target = {
        package: require(path.resolve('./package.json')),
        composition: await lib.compose(c => c)
    };

    const { modules } = compose({ target });
    const { io, renderers } = modules;
    const templateData = await getTemplateData({ target, io, renderers });
    await lib.renderFile('./README-TEMPLATE.md', templateData);
};

start();
