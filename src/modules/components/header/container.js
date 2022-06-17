export default ({ ui, header }) => () => {

    return ui.el('header').append(header.titleBar());

};
