export default ({ ui, subscriptions }) => () => {

    const $style = ui.el('style');

    subscriptions.settings.onChange('options', 'spacing', spacing => {
        $style.textContent = `.tag-list { gap: ${spacing}px; }`;
    });

    return $style;

};
