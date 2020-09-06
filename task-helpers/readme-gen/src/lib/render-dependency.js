module.exports = ({ depdoc, packageRoot }) => name => {

    const package = require(`${packageRoot}/node_modules/${name}/package.json`);
    const numDependencies = Object.keys(package.dependencies ?? {}).length;
    const icon = numDependencies === 0 ? ':boom:' : (numDependencies > 9 ? ':warning:' : ':white_check_mark:');

    const headerLines = [
        `### ❖ ${name}`,
        '',
        `> ${package.description}`,
        '',
        `- Homepage: ${package.homepage}`,
        `- __${numDependencies}__ dependenc${numDependencies === 1 ? 'y' : 'ies'} ${icon}`
    ];

    const renderUsedForLines = dep => {
        return [
            '#### Used for',
            '',
            dep.usedFor
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

    const renderAlternativesConsideredLines = dep => {
        const lines = Object.entries(dep.alternativesConsidered).map(([name, comment]) => {
            return `- __${name}__\\\n${comment}\n`;
        });
        return [
            '#### Alternatives considered',
            '',
            ...lines
        ];
    };

    const dep = depdoc.dependencies[name];
    const usedForLines = dep?.usedFor ? renderUsedForLines(dep) : [];
    const commentLines = dep?.comments ? renderCommentLines(dep) : [];
    const alternativesConsideredLines = dep?.alternativesConsidered ? renderAlternativesConsideredLines(dep) : [];
    return [headerLines, usedForLines, commentLines, alternativesConsideredLines].map(s => s.join('\n')).join('\n\n');

};
