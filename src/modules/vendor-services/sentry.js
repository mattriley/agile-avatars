import * as Sentry from '@sentry/browser';

export default ({ config }) => {

    Sentry.init(config.sentry);
    return Sentry;

};
