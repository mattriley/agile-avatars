module.exports = ({ target, renderers }) => () => packageKey => {

    const results = Object.entries(target.package[packageKey]).map(([name]) => {
        return renderers.renderDependency({ name });
    });

    return results.join('\n');
};
