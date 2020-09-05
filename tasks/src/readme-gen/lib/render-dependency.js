module.exports = ({ depdoc, packageRoot }) => name => {

    const package = require(`${packageRoot}/node_modules/${name}/package.json`);

    const headerLines = [
        `### ${name}`,
        '',
        `> ${package.description}\\`,
        `${package.homepage}`
    ];

    const renderUsedForLines = dep => {
        return [
            '#### Used for',
            '',
            dep['used-for']
        ];
    };

    const renderCommentLines = dep => {
        const commentLines = Object.entries(dep.comments).map(([constraintKey, comment]) => {
            const constraint = depdoc.constraints[constraintKey];
            return `- __${constraint}__\\\n${comment}\n`;
        });
        return [
            '#### Comments',
            '',
            ...commentLines
        ];
    };

    const dep = depdoc.dependencies[name];
    const usedForLines = dep?.['used-for'] ? renderUsedForLines(dep) : [];
    const commentLines = dep?.comments ? renderCommentLines(dep) : [];
    return [headerLines, usedForLines, commentLines].map(s => s.join('\n')).join('\n\n');

};
