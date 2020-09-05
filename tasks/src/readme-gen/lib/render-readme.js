module.exports = ({ lib, ejs }) => cb => {

    const data = lib.getTemplateData();

    ejs.renderFile('README-TEMPLATE.md', data, {}, (err, str) => {
        if (err) throw err;
        cb(str);
    });
    
};
