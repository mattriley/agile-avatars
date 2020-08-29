/* eslint-disable no-sync */
const ejs = require('ejs');
const fs = require('fs');

const nodeVersion = fs.readFileSync('.nvmrc', 'utf-8').trim();

const renderJsFile = (path, opts = {}) => {
    const open = opts.open ?? true;
    const code = fs.readFileSync(path, 'utf-8');
    return [
        `<details ${open ? 'open' : ''}>`,
        `<summary>${path}</summary>`,
        '',
        '```js',
        (opts.includeFootnotes ? code : code.split('/*')[0]).trim(),
        '```',
        '</details>'
    ].join('\n');
};

const data = {
    nodeVersion,
    renderJsFile,
    examples: {
        component: 'src/components/tag-list/tag/components/tag-name.js',
        componentAppend: 'src/components/header/header.js',
        element: 'src/elements/editable-span.js',
        service: 'src/services/tags/change-tag-instance-name.js',
        core: 'src/core/tags/parse-tag-expression.js',
        io: 'src/io/io.js',
        footnote: 'src/components/tag-list/tag/components/tag-image.js'
    },
    stateStore: 'src/lib/storage/state-store.js'
};

ejs.renderFile('README-TEMPLATE.md', data, {}, (err, str) => {
    if (err) throw err;
    process.stdout.write(str);
});
