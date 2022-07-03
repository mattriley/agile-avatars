const path = require('path');

module.exports = ({ bootAgileAvatars: boot, targetDir, io, services, renderers }) => async () => {
    const moduleNames = await io.loadModuleNames();
    const moduleTemplates = await io.loadModuleTemplates();
    const dependencies = await io.loadDependencies(); // here
    const dependencyConstraints = await io.loadDependencyConstraints();
    const package = await io.loadPackage();
    const sectionTemplates = await io.loadSectionTemplates();

    // const boot = require(path.resolve(targetDir, 'boot'));
    // const bootPath = path.resolve(targetDir, 'src/boot');
    // const boot = require(bootPath);
    // const { default: boot } = await import(path.resolve(targetDir, 'src/boot'))


    // const configPath = path.resolve(targetDir, 'src/data/config.json');
    // const config = require(configPath);

    // const context = boot({ config });
    const context = boot({}).modules;

    const renderDependencies = renderers.renderDependencies({ dependencyConstraints, dependencies, package });
    const renderSection = renderers.renderSection({
        sectionTemplates,
        templateData: {
            depTable: renderers.renderDepTable(),
            renderCodeFile: services.renderCodeFile,
            renderImage: services.renderImage,
            nodeVersion: io.loadNodeVersion(),
            moduleGraph: renderers.renderModuleGraph,
            modules: renderers.renderModules({ context, moduleNames, moduleTemplates, renderCodeFile: services.renderCodeFile, renderImage: services.renderImage, renderCollaborators: services.renderCollaborators }),
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
        modules: renderers.renderModules({ context, moduleNames, moduleTemplates, renderCodeFile: services.renderCodeFile, renderImage: services.renderImage }),
        renderSection,
        renderImage: services.renderImage,
        // moduleGraph: renderers.moduleGraph,
    };

};
