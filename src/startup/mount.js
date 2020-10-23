module.exports = ({ startup, components, window }) => () => {

    startup.startup();
    window.document.body.append(components.app());

};
