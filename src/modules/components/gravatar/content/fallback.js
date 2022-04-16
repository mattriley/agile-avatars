export default ({ el, services, subscriptions, ui }) => fallback => {

    const $fallback = el('img', 'fallback', {
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
