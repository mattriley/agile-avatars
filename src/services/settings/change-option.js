module.exports = ({ stores }) => (name, value) => {

    stores.settings.setState('options', { [name]: value });
    
};
