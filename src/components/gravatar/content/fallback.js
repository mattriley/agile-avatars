module.exports = ({ el, services, subscriptions, lib }) => fallback => {
    
    const $fallback = el('img', 'fallback', {
        title: fallback,
        src: `img/gravatar-fallbacks/${fallback}.png`
    }).addEventListener('click', () => {
        services.gravatar.changeFallback(fallback);
    });

    subscriptions.settings.gravatar.onChange('fallback', selectedFallback => {
        lib.ui.toggleBoolClass($fallback, 'selected', fallback === selectedFallback);
    }).invoke();

    return $fallback;
};
