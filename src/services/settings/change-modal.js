module.exports = ({ stores }) => modal => {
    
    stores.settings.setState('app', { modal });

};
