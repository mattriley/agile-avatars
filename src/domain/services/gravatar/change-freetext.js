module.exports = ({ stores }) => freetext => {

    stores.settings.update('gravatar', { freetext });

};