const glob = require('fast-glob');
const path = require('path');

module.exports = ({ fs }) => async () => {

    const templateFiles = await glob('./readme-gen/assets/modules/*.md');

    return templateFiles.reduce((acc, f) => {
        const template = fs.readFileSync(f, 'utf-8');
        const { name } = path.parse(f);
        return Object.assign(acc, { [name]: template });
    }, {});

};
