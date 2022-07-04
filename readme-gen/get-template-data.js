module.exports = ({ renderers }) => {

    return {
        dependencies: {
            production: renderers.renderDependencies('dependencies'),
            development: renderers.renderDependencies('devDependencies')
        }
    };

};
