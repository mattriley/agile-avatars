export default ({ el, header }) => () => {

    return el('header').append(header.titleBar());

};
