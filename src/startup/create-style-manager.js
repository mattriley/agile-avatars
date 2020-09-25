module.exports = ({ styles, subscriptions, util, window }) => () => {

    const { tagImage, roleColor, ...otherStyles } = styles;

    const appendStyles = (...$$styles) => window.document.head.append(...$$styles);
    appendStyles(...Object.values(otherStyles).map(style => style()));
    subscriptions.tags.onInsert(util.pipe(tagImage, appendStyles));
    subscriptions.roles.onInsert(util.pipe(roleColor, appendStyles));

};
