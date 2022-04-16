export default ({ stores }) => freetext => {

    stores.settings.update('gravatar', { freetext });

};
