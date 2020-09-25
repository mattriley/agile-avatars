module.exports = ({ stores }) => modal => {
    
    stores.settings.update('app', { modal });

};
