const fs = require('fs');
const YAML = require('yaml');
const glob = require('fast-glob');
const path = require('path');
const mapValues = require('lodash/mapValues');

module.exports = async ({ renderers }) => {

    const loadTemplates = async pattern => {
        const templateFiles = await glob(pattern);
        return templateFiles.reduce((acc, f) => {
            const template = fs.readFileSync(f, 'utf-8');
            const { name } = path.parse(f);
            return Object.assign(acc, { [name]: template });
        }, {});
    };

    const loadDependencies = () => {
        const dependenciesFile = fs.readFileSync('./readme-gen/assets/dependencies/dependencies.yaml', 'utf8');
        const dependencies = YAML.parse(dependenciesFile);
        const packages = mapValues(dependencies, (val, name) => {
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
    const moduleTemplates = await loadTemplates('./readme-gen/assets/modules/*.md');
    const sectionTemplates = await loadTemplates('./readme-gen/assets/sections/*.md');
    const constraintsFile = fs.readFileSync('./readme-gen/assets/dependencies/constraints.yaml', 'utf8');
    const dependencyConstraints = YAML.parse(constraintsFile);

    const renderDependencies = renderers.renderDependencies({ dependencyConstraints, dependencies });

    const templateData = {
        modules: renderers.renderModules({ moduleTemplates }),
        dependencies: {
            constraints: renderers.renderDependencyConstraints({ dependencyConstraints }),
            production: renderDependencies('dependencies'),
            development: renderDependencies('devDependencies')
        }
    };

    const renderSection = renderers.renderSection({ sectionTemplates, templateData });
    return { renderSection, ...templateData };

};
