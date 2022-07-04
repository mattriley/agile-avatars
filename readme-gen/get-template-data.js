module.exports = async ({ io, renderers }) => {

    const moduleTemplates = await io.loadModuleTemplates();
    const dependencies = await io.loadDependencies(); // here
    const dependencyConstraints = await io.loadDependencyConstraints();
    const sectionTemplates = await io.loadSectionTemplates();

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
