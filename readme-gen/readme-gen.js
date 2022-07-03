const compose = require('./compose');
const lib = require('task-library/src/lib/readme-gen');

const start = async () => {
    const composition = await lib.compose(c => c);
    const { services } = compose({ composition }).modules;
    const templateData = await services.getTemplateData();
    await lib.renderFile('./README-TEMPLATE.md', templateData);
};

start();
