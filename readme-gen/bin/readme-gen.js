const path = require('path');
const boot = require('../boot');
const targetDir = process.env.TARGET_DIR ?? process.cwd();

const start = async () => {
    const { default: bootAgileAvatars } = await import(path.resolve(targetDir, 'src/compose.js'));
    // const { default: bootAgileAvatars } = require(path.resolve(targetDir, 'src/boot.js'))
    const { commands } = boot({ targetDir, bootAgileAvatars }).modules;
    commands.readmeGen();
};

start();
