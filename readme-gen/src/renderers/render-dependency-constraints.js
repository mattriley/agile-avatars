module.exports = () => ({ dependencyConstraints }) => {

    const listItems = Object.values(dependencyConstraints).map(desc => `- ${desc}`)
    return listItems.join('\n');

};
