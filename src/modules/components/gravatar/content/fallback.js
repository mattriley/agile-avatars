export default ({ ui, services, subscriptions }) => fallback => {

    const $fallback = ui.el('img', 'fallback', {
        title: fallback,
        src: `img/gravatar-fallbacks/${fallback}.png`
    }).addEventListener('click', () => {
        services.gravatar.changeFallback(fallback);
    });

    subscriptions.settings.onChange('gravatar', 'fallback', selectedFallback => {
        ui.toggleBoolClass($fallback, 'selected', fallback === selectedFallback);
    });

    return $fallback;
};
