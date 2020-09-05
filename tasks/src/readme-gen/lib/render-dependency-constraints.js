module.exports = ({ depdoc }) => () => {

    return Object.values(depdoc.constraints).map(desc => `- ${desc}`).join('\n');

};
