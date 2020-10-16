module.exports = ({ styles, subscriptions, ui, util }) => () => {

    const { tagImage, roleColor, ...otherStyles } = styles;

    const appendStyles = (...$$styles) => ui.getDocument().head.append(...$$styles);
    appendStyles(...Object.values(otherStyles).map(style => style()));
    subscriptions.tags.onInsert(util.pipe(tagImage, appendStyles));
    subscriptions.roles.onInsert(util.pipe(roleColor, appendStyles));

};
