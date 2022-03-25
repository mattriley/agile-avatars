module.exports = ({ stores }) => fallback => {

    stores.settings.update('gravatar', { fallback });

};