module.exports = ({ styles, subscriptions, lib, window }) => {

    const { tagImage, roleColor, ...rest } = styles;

    const appendStyles = (...$$styles) => window.document.head.append(...$$styles);
    appendStyles(...Object.values(rest).map(style => style()));
    subscriptions.tags.onInsert(lib.util.pipe(tagImage, appendStyles));
    subscriptions.roles.onInsert(lib.util.pipe(roleColor, appendStyles));

};
