module.exports = ({ startup, components, ui }) => () => {

    startup.startup();
    ui.getDocument().body.append(components.app());

};
