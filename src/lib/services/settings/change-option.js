module.exports = ({ settings }) => (name, value) => {

    settings.options.setState({ [name]: value });
    
};
