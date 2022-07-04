const _ = require('lodash');
const flatten = require('flat');
const lib = require('task-library/src/lib/readme-gen');

module.exports = ({ target, io, renderers }) => async () => {

    const moduleNames = Object.keys(target.composition.dependencies);
    const context = target.composition.modules;

    const modules = await Promise.all(moduleNames.map(async name => {


        const renderIndex = (opts = {}) => {
            const keys = Object.keys(flatten(context[name], opts)).sort();

            const half = Math.ceil(keys.length / 2);

            const firstHalf = keys.splice(0, half);
            const secondHalf = keys.splice(-half);

            const z = _.flatten(_.zip(firstHalf, secondHalf)).filter(element => element);
            const chunks = _.chunk(z, 2);


            const lines = chunks.map(items => items.map(item => item.padEnd(48, ' ')).join(''));

            return ['```', ...lines, '```'].join('\n');

        };

        const renderCollaborators = () => renderers.renderCollaborators({ moduleName: name });
        const template = target.moduleTemplates[name] || '';
        const content = await io.ejs.render(template, { lib: { ...lib, renderIndex, renderCollaborators } }, { async: true });
        const title = `## ${name}\n`;
        return [title, content].join('\n\n');
    }));

    return modules.join('\n');

};
