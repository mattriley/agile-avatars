const _ = require('lodash');
const flatten = require('flat');
const path = require('path');
const lib = require('task-library/src/lib/readme-gen');

module.exports = ({ target, io, renderers }) => async () => {

    const loadTemplates = async pattern => {
        const templateFiles = await io.glob(pattern);
        return templateFiles.reduce((acc, f) => {
            const template = io.fs.readFileSync(f, 'utf-8');
            const { name } = path.parse(f);
            return Object.assign(acc, { [name]: template });
        }, {});
    };

    const moduleTemplates = await loadTemplates('./readme-gen/assets/modules/*.md');
    const moduleNames = Object.keys(target.composition.dependencies);
    const context = target.composition.modules;

    const modules = await Promise.all(moduleNames.map(async name => {
        const renderCollaborators = () => renderers.renderCollaborators({ moduleName: name });
        const template = moduleTemplates[name] || '';

        const renderIndex = (opts = {}) => {
            const keys = Object.keys(flatten(context[_.camelCase(name)], opts)).sort();

            const half = Math.ceil(keys.length / 2);

            const firstHalf = keys.splice(0, half);
            const secondHalf = keys.splice(-half);

            const z = _.flatten(_.zip(firstHalf, secondHalf)).filter(element => element);
            const chunks = _.chunk(z, 2);


            const lines = chunks.map(items => items.map(item => item.padEnd(48, ' ')).join(''));

            return ['```', ...lines, '```'].join('\n');

        };

        const content = await io.ejs.render(template, { lib: { ...lib, renderIndex, renderCollaborators } }, { async: true });
        const title = `## ${name}\n`;
        return [title, content].join('\n\n');
    }));

    return modules.join('\n');

};
