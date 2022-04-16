import _ from 'lodash';
import config from './data/config.json';
const isLocalhost = (/localhost/).test(window.location.host);

const overrides = {
    gtag: {
        enabled: !isLocalhost
    },
    sentry: {
        enabled: !isLocalhost
    }
};

export default _.merge({}, config, overrides);
