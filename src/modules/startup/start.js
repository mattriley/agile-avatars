export default ({ startup, components }) => render => {

    startup.insertNilRole();
    startup.createHandlers();
    startup.createStyleManager();
    return render && render(components.app());

};
