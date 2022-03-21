module.exports = ({ el, header }) => () => {

    return el('header').append(header.titleBar());

};
