const path = require('path');

module.exports = ({ lib, ejs }) => async cb => {

    const modules = await lib.getModules();

    const data = { modules, ...lib.getTemplateData() };
    

    const templatePath = path.join(process.cwd(), 'README-TEMPLATE.md');

    ejs.renderFile(templatePath, data, {}, (err, str) => {
        if (err) throw err;
        cb(str);
    });
    
};
