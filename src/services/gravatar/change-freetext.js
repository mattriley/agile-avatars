module.exports = ({ stores }) => freetext => {

    stores.settings.setState('gravatar', { freetext });

};