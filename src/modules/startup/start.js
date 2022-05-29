export default ({ startup, components, config, window }) => ({ composition }) => {

    window.document.title = config.app.name;
    window.app = composition;

    startup.insertNilRole();
    startup.createHandlers();
    startup.createStyleManager();

    return components.app();

};
