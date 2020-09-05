/* eslint-disable no-sync */
const yaml = require('js-yaml');

module.exports = ({ process, fs }) => {

    const path = `${process.cwd()}/docs/dependencies.yaml`;
    return yaml.safeLoad(fs.readFileSync(path, 'utf8'));

};
