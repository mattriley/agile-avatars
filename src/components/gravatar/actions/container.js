module.exports = ({ el, actions }) => () => {

    return el('div').append(
        actions.import(),
        actions.loading(),
        actions.error()
    );

};
