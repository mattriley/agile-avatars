module.exports = ({ target }) => () => {

    const listItems = Object.values(target.dependencyConstraints).map(desc => `- ${desc}`);
    return listItems.join('\n');

};
