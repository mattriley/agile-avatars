export default ({ stores }) => modal => {

    stores.settings.update('app', { modal });

};
