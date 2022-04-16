import * as Sentry from '@sentry/browser';

export default ({ config }) => {

    if (Sentry.init) Sentry.init(config.sentry);
    return Sentry;

};
