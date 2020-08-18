module.exports = ({ el, styles, thirdPartyComponents, subscriptions }) => () => {

    const $styles = el('div', { hidden: true }).append(
        thirdPartyComponents.vanillaPicker.style(),
        styles.tagShape(),
        styles.tagSize(),
        styles.tagSpacing(),
        styles.tagOutline()
    );

    subscriptions.roles.onInsert(roleId => $styles.append(styles.role(roleId)));
    subscriptions.tags.onInsert(tagId => $styles.append(styles.tagImage(tagId)));

    return $styles;

};
