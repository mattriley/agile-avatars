/* eslint-disable no-sync */
const ejs = require('ejs');
const fs = require('fs');

const renderLink = path => `[${path}](${path})`;

const renderJsFile = (path, opts = {}) => {
    const code = fs.readFileSync(path, 'utf-8');
    return [
        renderLink(path),
        '```js',
        (opts.includeFootnotes ? code : code.split('/*')[0]).trim(),
        '```'
    ].join('\n');
};

const data = {
    renderJsFile,
    examples: {
        component: 'src/components/tag-list/tag/components/tag-name.js',
        element: 'src/elements/editable-span.js',
        service: 'src/services/tags/change-tag-instance-name.js',
        core: 'src/core/tags/parse-tag-expression.js',
        io: 'src/io/io.js',
        footnote: 'src/components/tag-list/tag/components/tag-image.js'
    }
};

ejs.renderFile('README-TEMPLATE.md', data, {}, (err, str) => {
    if (err) throw err;
    process.stdout.write(str);
});
