module.exports = ({ el, styles, subscriptions }) => () => {

    const $styles = el('div', { hidden: true }).append(
        styles.vanillaPicker(),
        styles.tagShape(),
        styles.tagSize(),
        styles.tagSpacing(),
        styles.tagOutline(),
        styles.tagImage()
    );

    subscriptions.roles.onInsert(roleId => $styles.append(styles.role(roleId)));

    return $styles;

};
