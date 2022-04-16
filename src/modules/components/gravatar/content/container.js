export default ({ el, content }) => () => {

    return el('div', 'gravatar').append(
        content.freetext(),
        content.fallbacks()
    );

};
