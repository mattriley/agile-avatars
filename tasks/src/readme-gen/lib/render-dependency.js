module.exports = ({ depdoc, packageRoot }) => name => {

    const package = require(`${packageRoot}/node_modules/${name}/package.json`);

    const headerLines = [
        `### ${name}`,
        '',
        `> ${package.description}\\`,
        `${package.homepage}`
    ];

    const renderCommentLines = dep => {
        return Object.entries(dep.comments).map(([constraintKey, comment]) => {
            const constraint = depdoc.constraints[constraintKey];
            return `- __${constraint}__\\\n${comment}\n`;
        });
    };

    const dep = depdoc.dependencies[name];
    const usedForLines = dep ? [dep['used-for']] : [];
    const commentLines = dep ? renderCommentLines(dep) : [];
    return [headerLines, usedForLines, commentLines].map(s => s.join('\n')).join('\n\n');

};
