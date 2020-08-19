module.exports = ({ el, styles, subscriptions }) => () => {

    const $styles = el('div', { hidden: true }).append(
        styles.vanillaPicker(),
        styles.tagShape(),
        styles.tagSize(),
        styles.tagSpacing(),
        styles.tagOutline()
    );

    subscriptions.roles.onInsert(roleId => $styles.append(styles.role(roleId)));
    subscriptions.tags.onInsert(tagId => $styles.append(styles.tagImage(tagId)));

    return $styles;

};
