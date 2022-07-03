const process = require('process');
const compose = require('./compose');
const lib = require('task-library/src/lib/readme-gen');

const targetDir = process.cwd();

const start = async () => {
    const composition = await lib.compose(c => c, `${targetDir}/src/compose.js`);
    const { services } = compose({ targetDir, composition }).modules;
    const readme = await services.renderReadme();
    console.log(readme);
};

start();
