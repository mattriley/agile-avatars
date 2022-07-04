module.exports = async ({ target, io, renderers }) => {
    const moduleNames = await io.loadModuleNames();
    const moduleTemplates = await io.loadModuleTemplates();
    const dependencies = await io.loadDependencies(); // here
    const dependencyConstraints = await io.loadDependencyConstraints();
    const package = target.package;
    const sectionTemplates = await io.loadSectionTemplates();

    const context = target.composition.modules;


    const renderDependencies = renderers.renderDependencies({ dependencyConstraints, dependencies, package });
    const renderSection = renderers.renderSection({
        sectionTemplates,
        templateData: {
            depTable: renderers.renderDepTable(),
            moduleGraph: renderers.renderModuleGraph,
            modules: renderers.renderModules({ context, moduleNames, moduleTemplates, renderers: renderers.renderCodeFile, renderCollaborators: renderers.renderCollaborators }),
            dependencies: {
                constraints: renderers.renderDependencyConstraints({ dependencyConstraints }),
                production: renderDependencies('dependencies'),
                development: renderDependencies('devDependencies')
            }
        }
    })

    return {
        dependencies: {
            constraints: renderers.renderDependencyConstraints({ dependencyConstraints }),
            production: renderDependencies('dependencies'),
            development: renderDependencies('devDependencies')
        },
        modules: renderers.renderModules({ context, moduleNames, moduleTemplates }),
        renderSection
    };

};
