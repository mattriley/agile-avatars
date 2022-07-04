const compose = require('./compose');
const getTemplateData = require('./get-template-data');
const lib = require('task-library/src/lib/readme-gen');

const start = async () => {
    const composition = await lib.compose(c => c);
    const { io, renderers } = compose({ composition }).modules;
    const templateData = await getTemplateData({ composition, io, renderers });
    await lib.renderFile('./README-TEMPLATE.md', templateData);
};

start();
