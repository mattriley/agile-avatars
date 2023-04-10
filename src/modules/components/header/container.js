export default ({ ui, components }) => () => {

    return ui.el('header').append(components.header.titleBar());

};
