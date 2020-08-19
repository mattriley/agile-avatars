const Sentry = require('@sentry/browser');

module.exports = ({ window, config }) => {

    Sentry.init(config.sentry);

    return {
        sentry: Sentry,        
        random: window.Math.random,
        fetch: window.fetch.bind(window),
        date: () => new window.Date(),
        createFileReader: () => new window.FileReader()
    };

};
