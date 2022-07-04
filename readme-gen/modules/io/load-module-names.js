const glob = require('fast-glob');

module.exports = () => () => {

    const cwd = './src/modules';
    return glob('*', { cwd, onlyDirectories: true });

};
