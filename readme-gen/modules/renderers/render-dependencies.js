module.exports = ({ target, renderers }) => ({ dependencyConstraints, dependencies }) => packageKey => {

    const results = Object.entries(target.package[packageKey]).map(([name]) => {
        return renderers.renderDependency({ dependencyConstraints, dependencies, name });
    });

    return results.join('\n');
};
