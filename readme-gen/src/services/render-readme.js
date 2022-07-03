const ejs = require('ejs');
const lib = require('task-library/src/lib/readme-gen');

module.exports = ({ services, io }) => async () => {

    const template = await io.loadReadmeTemplate();
    const templateData = await services.getTemplateData(); // here
    return await ejs.render(template, { ...templateData, lib }, { async: true });

};
