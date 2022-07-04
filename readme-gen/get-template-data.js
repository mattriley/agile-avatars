const fs = require('fs');
const YAML = require('yaml');
const glob = require('fast-glob');
const path = require('path');

module.exports = async ({ io, renderers }) => {

    const dependencies = await io.loadDependencies(); // here
    const sectionTemplates = await io.loadSectionTemplates();

    const templateFiles = await glob('./readme-gen/assets/modules/*.md');

    const moduleTemplates = templateFiles.reduce((acc, f) => {
        const template = fs.readFileSync(f, 'utf-8');
        const { name } = path.parse(f);
        return Object.assign(acc, { [name]: template });
    }, {});



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
