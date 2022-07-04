const ejs = require('ejs');
const flatten = require('flat');
const _ = require('lodash');
const lib = require('task-library/src/lib/readme-gen');

module.exports = ({ renderers }) => async ({ context, moduleNames, moduleTemplates }) => {

    const templateData = { lib, context, flatten };

    const modules = await Promise.all(moduleNames.map(async name => {
        const collaborators = renderers.renderCollaborators({ moduleName: name });
        const template = moduleTemplates[name] || '';

        const renderIndex = (opts = {}) => {
            // return Object.keys(flatten(context[_.camelCase(name)], opts)).map(c => `- ${c}`).sort().join('\n')

            const keys = Object.keys(flatten(context[_.camelCase(name)], opts)).sort();

            const half = Math.ceil(keys.length / 2);

            const firstHalf = keys.splice(0, half);
            const secondHalf = keys.splice(-half);

            const z = _.flatten(_.zip(firstHalf, secondHalf)).filter(element => element);
            const chunks = _.chunk(z, 2);


            const lines = chunks.map(items => items.map(item => item.padEnd(48, ' ')).join(''));

            return ['```', ...lines, '```'].join('\n');

        };

        const content = await ejs.render(template, { renderIndex, collaborators, ...templateData, lib }, { async: true });
        const title = `## ${name}\n`;
        //const block = renderers.renderCollaborators({ moduleName: name })
        // return [title, block, content].join('\n\n')
        return [title, content].join('\n\n');
    }));

    return modules.join('\n');

};
