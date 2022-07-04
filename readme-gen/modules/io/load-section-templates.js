const glob = require('fast-glob');
const path = require('path');

module.exports = ({ fs }) => async () => {

    const templateFiles = await glob('./readme-gen/assets/sections/*.md');

    return templateFiles.reduce((acc, f) => {
        const template = fs.readFileSync(f, 'utf-8');
        const { name } = path.parse(f);
        return Object.assign(acc, { [name]: template });
    }, {});

};
