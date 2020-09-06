const path = require('path');

module.exports = ({ lib, ejs }) => cb => {

    const data = lib.getTemplateData();

    const templatePath = path.join(__dirname, '..', 'README-TEMPLATE.md');

    ejs.renderFile(templatePath, data, {}, (err, str) => {
        if (err) throw err;
        cb(str);
    });
    
};
