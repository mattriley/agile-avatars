module.exports = ({ startup }) => () => {

    startup.insertNilRole();
    startup.createHandlers();
    startup.createStyleManager();

};
