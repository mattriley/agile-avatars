module.exports = ({ renderers }) => {

    return {
        modules: renderers.renderModules(),
        dependencies: {
            constraints: renderers.renderDependencyConstraints(),
            production: renderers.renderDependencies('dependencies'),
            development: renderers.renderDependencies('devDependencies')
        }
    };

};
