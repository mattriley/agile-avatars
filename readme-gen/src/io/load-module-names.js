const glob = require('fast-glob');
const path = require('path');

module.exports = ({ targetDir }) => () => {

    const cwd = path.resolve(targetDir, 'src/modules');
    return glob('*', { cwd, onlyDirectories: true })

};
