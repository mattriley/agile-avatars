const _ = require('lodash');
const YAML = require('yaml');

module.exports = async ({ io, renderers }) => {


    const loadDependencies = () => {
        const dependenciesFile = io.fs.readFileSync('./readme-gen/assets/dependencies/dependencies.yaml', 'utf8');
        const dependencies = YAML.parse(dependenciesFile);
        const packages = _.mapValues(dependencies, (val, name) => {
            try {
                return JSON.parse(io.fs.readFileSync(`./node_modules/${name}/package.json`, 'utf8'));
            }
            catch (err) {
                // some don't have package.json?
                return {};
            }
        });

        return { dependencies, packages };
    };

    const dependencies = await loadDependencies();

    const renderDependencies = renderers.renderDependencies({ dependencies });

    return {
        modules: renderers.renderModules(),
        dependencies: {
            constraints: renderers.renderDependencyConstraints(),
            production: renderDependencies('dependencies'),
            development: renderDependencies('devDependencies')
        }
    };

};
