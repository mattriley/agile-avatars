export default ({ el, actions }) => () => {

    return el('div').append(
        actions.importButton(),
        actions.loading(),
        actions.error()
    );

};
