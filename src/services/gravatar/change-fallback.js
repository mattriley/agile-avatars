module.exports = ({ stores }) => fallback => {

    stores.settings.setState('gravatar', { fallback });

};