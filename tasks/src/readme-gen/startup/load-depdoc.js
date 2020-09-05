/* eslint-disable no-sync */
const yaml = require('js-yaml');

module.exports = ({ packageRoot, fs }) => {

    const path = `${packageRoot}/docs/dependencies.yaml`;
    return yaml.safeLoad(fs.readFileSync(path, 'utf8'));

};
