const YAML = require('yaml');

module.exports = ({ fs }) => () => {

    const constraintsFile = fs.readFileSync('./readme-gen/assets/dependencies/constraints.yaml', 'utf8');
    return YAML.parse(constraintsFile);

};
