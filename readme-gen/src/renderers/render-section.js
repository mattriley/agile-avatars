const ejs = require('ejs');

module.exports = () => ({ sectionTemplates, templateData }) => async sectionName => {

    const template = sectionTemplates[sectionName];
    const content = await ejs.render(template, templateData, { async: true });
    return content;

};
