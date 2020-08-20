const ejs = require('ejs');
const fs = require('fs');

const renderLink = path => `[${path}](${path})`;

const renderJsFile = path => {
    const [code] = fs.readFileSync(path, 'utf-8').split('/*').map(s => s.trim());
    const lines = [
        renderLink(path),
        '```js',
        code,
        '```'
    ];
    return lines.join('\n');
};

const data = {
    exampleComponentPath: 'src/components/tag-list/tag/components/tag-name.js',
    exampleElementPath: 'src/elements/editable-span.js',
    exampleServicePath: 'src/services/tags/change-tag-instance-name.js',
    exampleCorePath: 'src/core/tags/parse-tag-expression.js',
    exampleIOPath: 'src/io/io.js',
    exampleFootnotePath: 'src/components/tag-list/tag/components/tag-image.js',
    renderJsFile
};

ejs.renderFile('README-TEMPLATE.md', data, {}, (err, str) => {
    if (err) throw err;
    process.stdout.write(str);
});
