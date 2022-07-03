module.exports = ({ renderers }) => ({ dependencyConstraints, dependencies, package }) => packageKey => {

    const results = Object.entries(package[packageKey]).map(([name]) => {
        return renderers.renderDependency({ dependencyConstraints, dependencies, name });
    });
    
    return results.join('\n');
};
