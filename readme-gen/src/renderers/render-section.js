const ejs = require('ejs');
const lib = require('task-library/src/lib/readme-gen');

module.exports = () => ({ sectionTemplates, templateData }) => async sectionName => {

    const template = sectionTemplates[sectionName];
    const content = await ejs.render(template, { ...templateData, lib }, { async: true });
    return content;

};
