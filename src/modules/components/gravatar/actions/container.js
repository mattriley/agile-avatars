export default ({ ui, components }) => () => {

    return ui.el('div').append(
        components.gravatar.actions.importButton(),
        components.gravatar.actions.loading(),
        components.gravatar.actions.error()
    );

};
