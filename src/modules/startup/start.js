export default ({ startup, components }) => () => {

    startup.insertNilRole();
    startup.createHandlers();
    startup.createStyleManager();

    return components.app();

};
