module.exports = ({ stores }) => () => {
    
    stores.settings.update('app', { modal: null });

};
