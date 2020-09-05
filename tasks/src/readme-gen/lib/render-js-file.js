/* eslint-disable no-sync */
module.exports = ({ fs }) => (path, opts = {}) => {

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
