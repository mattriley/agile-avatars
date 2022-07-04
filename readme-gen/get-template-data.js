module.exports = ({ renderers }) => {

    const renderDependencies = renderers.renderDependencies();

    return {
        modules: renderers.renderModules(),
        dependencies: {
            constraints: renderers.renderDependencyConstraints(),
            production: renderDependencies('dependencies'),
            development: renderDependencies('devDependencies')
        }
    };

};
