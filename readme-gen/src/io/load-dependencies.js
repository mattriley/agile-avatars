const mapValues = require('lodash/mapValues')
const YAML = require('yaml');

module.exports = ({ targetDir, fs }) => () => {

    const dependenciesFile = fs.readFileSync('./readme-gen/assets/dependencies/dependencies.yaml', 'utf8')

    const dependencies = YAML.parse(dependenciesFile);

    const dependencyPackages = mapValues(dependencies, (val, name) => {
        const p = `${targetDir}/node_modules/${name}/package.json`;

        try {
            return require(p);
        }
        catch (err) {
            // some don't have package.json?
            return {};
        }
    })

    return {
        dependencies,
        packages: dependencyPackages
    };

};
