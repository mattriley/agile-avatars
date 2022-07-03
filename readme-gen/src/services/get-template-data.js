module.exports = ({ composition, io, services, renderers }) => async () => {
    const moduleNames = await io.loadModuleNames();
    const moduleTemplates = await io.loadModuleTemplates();
    const dependencies = await io.loadDependencies(); // here
    const dependencyConstraints = await io.loadDependencyConstraints();
    const package = await io.loadPackage();
    const sectionTemplates = await io.loadSectionTemplates();

    const context = composition.modules;


    const renderDependencies = renderers.renderDependencies({ dependencyConstraints, dependencies, package });
    const renderSection = renderers.renderSection({
        sectionTemplates,
        templateData: {
            depTable: renderers.renderDepTable(),
            moduleGraph: renderers.renderModuleGraph,
            modules: renderers.renderModules({ context, moduleNames, moduleTemplates, renderers: renderers.renderCodeFile, renderCollaborators: services.renderCollaborators }),
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
