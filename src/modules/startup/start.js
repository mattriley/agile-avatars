export default ({ startup }) => () => {

    startup.insertNilRole();
    startup.createHandlers();
    startup.createStyleManager();

    return {
        createRoot: container => {
            return {
                render: element => container.append(element)
            };
        }
    };

};
