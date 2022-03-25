const _ = require('lodash');
const config = require('../src/data/config.json');
const isLocalhost = (/localhost/).test(window.location.host);

const overrides = {
    gtag: {
        enabled: !isLocalhost
    },
    sentry: {
        enabled: !isLocalhost
    }
};

module.exports = _.merge({}, config, overrides);
