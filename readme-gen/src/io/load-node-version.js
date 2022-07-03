const path = require('path');

module.exports = ({ targetDir, fs }) => () => {

    const nvmrc = path.join(targetDir, '.nvmrc');
    return fs.readFileSync(nvmrc, 'utf-8').trim();

};
