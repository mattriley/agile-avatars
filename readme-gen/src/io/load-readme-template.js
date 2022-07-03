module.exports = ({ fs }) => () => {

    return fs.readFileSync('./README-TEMPLATE.md', 'utf-8');

};
