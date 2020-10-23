const isLocalhost = (/localhost/).test(window.location.host);

module.exports = {
    gtag: {
        enabled: !isLocalhost
    },
    sentry: {
        enables: !isLocalhost
    }
};
