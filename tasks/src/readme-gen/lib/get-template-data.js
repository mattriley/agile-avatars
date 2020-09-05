module.exports = ({ lib }) => () => {

    return {
        nodeVersion: lib.getNodeVersion(),
        renderJsFile: lib.renderJsFile,
        dependencies: {
            constraints: lib.renderDependencyConstraints(),
            production: lib.renderDependencies('dependencies'),
            development: lib.renderDependencies('devDependencies')
        }
    };

};
