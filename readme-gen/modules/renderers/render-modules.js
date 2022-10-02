module.exports = ({ readmeGenLib, target, io, renderers }) => async () => {


    const moduleNames = Object.keys(target.composition.dependencies);

    const modules = await Promise.all(moduleNames.map(async name => {

        const renderIndex = opts => renderers.renderIndex(name, opts);
        const renderCollaborators = () => renderers.renderCollaborators({ moduleName: name });

        const template = target.moduleTemplates[name] || '';

        const content = await io.ejs.render(template, { lib: { ...readmeGenLib, renderIndex, renderCollaborators } }, { async: true });
        const title = `## ${name}\n`;
        return [title, content].join('\n\n');
    }));

    return modules.join('\n');

};
