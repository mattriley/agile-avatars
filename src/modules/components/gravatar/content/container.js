export default ({ ui, content }) => () => {

    return ui.el('div', 'gravatar').append(
        content.freetext(),
        content.fallbacks()
    );

};
