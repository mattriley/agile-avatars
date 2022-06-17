export default ({ ui, actions }) => () => {

    return ui.el('div').append(
        actions.importButton(),
        actions.loading(),
        actions.error()
    );

};
