module.exports = ({ target, renderers }) => ({ dependencies }) => packageKey => {

    const results = Object.entries(target.package[packageKey]).map(([name]) => {
        return renderers.renderDependency({ dependencies, name });
    });

    return results.join('\n');
};
