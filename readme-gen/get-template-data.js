const fs = require('fs');
const YAML = require('yaml');
const _ = require('lodash');

module.exports = async ({ renderers }) => {


    const loadDependencies = () => {
        const dependenciesFile = fs.readFileSync('./readme-gen/assets/dependencies/dependencies.yaml', 'utf8');
        const dependencies = YAML.parse(dependenciesFile);
        const packages = _.mapValues(dependencies, (val, name) => {
            try {
                return JSON.parse(fs.readFileSync(`./node_modules/${name}/package.json`, 'utf8'));
            }
            catch (err) {
                // some don't have package.json?
                return {};
            }
        });

        return { dependencies, packages };
    };

    const dependencies = await loadDependencies();
    const constraintsFile = fs.readFileSync('./readme-gen/assets/dependencies/constraints.yaml', 'utf8');
    const dependencyConstraints = YAML.parse(constraintsFile);

    const renderDependencies = renderers.renderDependencies({ dependencyConstraints, dependencies });

    return {
        modules: renderers.renderModules(),
        dependencies: {
            constraints: renderers.renderDependencyConstraints({ dependencyConstraints }),
            production: renderDependencies('dependencies'),
            development: renderDependencies('devDependencies')
        }
    };

};
