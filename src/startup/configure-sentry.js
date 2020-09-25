const sentry = require('@sentry/browser');

module.exports = ({ config }) => {

    sentry.init(config.sentry);

};
