const fs = require('fs');
const YAML = require('yaml');
const glob = require('fast-glob');
const path = require('path');

module.exports = async ({ io, renderers }) => {

    const loadTemplates = async pattern => {
        const templateFiles = await glob(pattern);
        return templateFiles.reduce((acc, f) => {
            const template = fs.readFileSync(f, 'utf-8');
            const { name } = path.parse(f);
            return Object.assign(acc, { [name]: template });
        }, {});
    };

    const dependencies = await io.loadDependencies();
    const moduleTemplates = await loadTemplates('./readme-gen/assets/modules/*.md');
    const sectionTemplates = await loadTemplates('./readme-gen/assets/sections/*.md');
    const constraintsFile = fs.readFileSync('./readme-gen/assets/dependencies/constraints.yaml', 'utf8');
    const dependencyConstraints = YAML.parse(constraintsFile);

    const renderDependencies = renderers.renderDependencies({ dependencyConstraints, dependencies });
    const renderSection = renderers.renderSection({
        sectionTemplates,
        templateData: {
            modules: renderers.renderModules({ moduleTemplates, renderers: renderers.renderCodeFile, renderCollaborators: renderers.renderCollaborators }),
            dependencies: {
                constraints: renderers.renderDependencyConstraints({ dependencyConstraints }),
                production: renderDependencies('dependencies'),
                development: renderDependencies('devDependencies')
            }
        }
    });

    return {
        dependencies: {
            constraints: renderers.renderDependencyConstraints({ dependencyConstraints }),
            production: renderDependencies('dependencies'),
            development: renderDependencies('devDependencies')
        },
        modules: renderers.renderModules({ moduleTemplates }),
        renderSection
    };

};
