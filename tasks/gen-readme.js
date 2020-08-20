const ejs = require('ejs');

const data = {
    exampleComponentPath: 'src/components/tag-list/tag/components/tag-name.js',
    exampleElementPath: 'src/elements/editable-span.js',
    exampleServicePath: 'src/services/tags/change-tag-instance-name.js',
    exampleCorePath: 'src/core/tags/parse-tag-expression.js',
    exampleIOPath: 'src/io/io.js',
    exampleFootnotePath: 'src/components/tag-list/tag/components/tag-image.js',
    renderLink: path => `[${path}](${path})`
};

ejs.renderFile('README-TEMPLATE.md', data, { filename: './README.md' }, (err, str) => {
    console.log(str);
});
