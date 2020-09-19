module.exports = ({ stores }) => (name, value) => {

    stores.settings.update('options', { [name]: value });
    
};
