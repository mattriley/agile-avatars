module.exports = ({ stores }) => () => {
    
    stores.settings.setState('app', { modal: null });

};
