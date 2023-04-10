export default ({ ui, components }) => () => {

    return ui.el('div', 'gravatar').append(
        components.gravatar.content.freetext(),
        components.gravatar.content.fallbacks()
    );

};
