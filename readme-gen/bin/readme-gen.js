const process = require('process');
const compose = require('../compose');
const targetDir = process.cwd();

const start = async () => {
    const { services } = compose({ targetDir }).modules;
    const readme = await services.renderReadme();
    console.log(readme);
};

start();
