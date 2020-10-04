const path = require('path');
const src = require(path.resolve(process.cwd(), 'src'));
const ejs = require('ejs');
const globby = require('globby');


const fs = require('fs');
const sloc = require('sloc');

module.exports = ({ lib }) => async () => {

    const data = lib.getTemplateData();


    const modules = await Promise.all(Object.keys(src).map(async name => {

        const sourceFiles = await globby(path.resolve(process.cwd(), `src/${name}/**/*.js`));
        
        const stats = await Promise.all(sourceFiles.map(async f => {
            const code = await fs.promises.readFile(f, 'utf8');
            const stats = sloc(code, 'js');
            return { path: f, stats };
        }));

        // console.warn(stats);


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
