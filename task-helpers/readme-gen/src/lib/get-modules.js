const path = require('path');
const src = require(path.resolve(process.cwd(), 'src'));
const ejs = require('ejs');

module.exports = ({ lib }) => async () => {

    const data = lib.getTemplateData();


    const modules = await Promise.all(Object.keys(src).map(name => {

        return new Promise((resolve, reject) => {
            ejs.renderFile(process.cwd() + `/task-helpers/readme-gen/src/docs/modules/${name}.md`, data, {}, (err, str = '') => {
                if (err) {} // resolve(''); // reject(err);
                const content = `### ❖ ${name}\n\n${str}`;
                resolve(content);
            });
        });

    }));

    return modules.join('\n');

};
