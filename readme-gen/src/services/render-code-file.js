/* eslint-disable no-sync */
const path = require('path');

module.exports = ({ renderers, fs, targetDir }) => (filePath, opts = {}) => {

    const lang = path.extname(filePath).replace('.', '') || 'sh'
    const code = fs.readFileSync(path.resolve(targetDir, filePath), 'utf-8');
    return renderers.renderCodeFile(filePath, code, lang, opts);

};
