const Sentry = require('@sentry/browser');

module.exports = ({ window, config }) => {

    Sentry.init(config.analytics.sentry);

    return {
        sentry: Sentry,
        getDate: () => new window.Date(),
        random: window.Math.random,
        fetch: window.fetch.bind(window),
        createFileReader: () => new window.FileReader()
    };

};
