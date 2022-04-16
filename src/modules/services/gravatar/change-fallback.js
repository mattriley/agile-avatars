export default ({ stores }) => fallback => {

    stores.settings.update('gravatar', { fallback });

};
