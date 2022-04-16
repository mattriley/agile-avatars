export default ({ styles, subscriptions, ui, util }) => () => {

    const { tagImage, roleColor, ...otherStyles } = styles;
    const appendStyles = (...$$styles) => ui.appendToHead(...$$styles);
    appendStyles(...Object.values(otherStyles).map(style => style()));
    subscriptions.tags.onInsert(util.pipe(tagImage, appendStyles));
    subscriptions.roles.onInsert(util.pipe(roleColor, appendStyles));

};
