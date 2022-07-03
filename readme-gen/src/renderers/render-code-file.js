const lib = require('task-library/src/lib/readme-gen');

module.exports = () => (filePath, code, lang) => {
    return lib.renderCode(code, lang, filePath);
};

// module.exports = () => (filePath, code, lang, opts = {}) => {

//     const open = opts.open ?? true;
    
//     const lines = [
//         '',
//         `<details ${open ? 'open' : ''}>`,
//         `<summary>${filePath}</summary>`,
//         '',
//         '```' + lang,
//         (opts.includeFootnotes ? code : code.split('/* FOOTNOTES')[0]).trim(),
//         '```',
//         '</details>'
//     ];
    
//     return lines.join('\n');

// };
