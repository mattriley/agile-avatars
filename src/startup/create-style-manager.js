module.exports = ({ styles, subscriptions, window }) => {

    const { tagImage, roleColor, ...rest } = styles;

    const appendStyles = (...$$styles) => window.document.head.append(...$$styles);

    appendStyles(...Object.values(rest).map(style => style()));

    subscriptions.tags.onInsert(tagId => appendStyles(tagImage(tagId)));

    // subscriptions.tags.onInsert(tagId => lib.util.pipe(tagId, tagImage, appendStyles));

    subscriptions.roles.onInsert(roleId => appendStyles(roleColor(roleId)));

};
