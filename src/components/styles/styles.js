module.exports = ({ el, styles }) => () => {

    const $styles = el('div', { hidden: true }).append(
        styles.vanillaPicker(),
        styles.tagShape(),
        styles.tagSize(),
        styles.tagSpacing(),
        styles.tagOutline(),
        styles.tagImage(),
        styles.roleColor()
    );


    return $styles;

};
