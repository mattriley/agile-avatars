export default ({ stores }) => () => {

    stores.settings.update('app', { modal: null });

};
