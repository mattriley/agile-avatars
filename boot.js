const sentry = require('@sentry/browser');
const composer = require('module-composer');
const { lib, startup, ...src } = require('./src');

module.exports = ({ window, ...overrides }) => {

    const compose = composer(src, { overrides });

    const io = compose('io', { window });
    const config = compose('config', { io, window });
    sentry.init(config.sentry);

    const gtag = startup.createGtag({ config, window });
        
    // Data layer
    const { stores, subscriptions, getState } = startup.createStores({ lib, config });
        
    // Domain layer
    const core = compose('core', { lib, config });
    const services = compose('services', { subscriptions, stores, core, io, lib, config });

    // Presentation layer
    const { el, ...elements } = compose('elements', { lib, window });
    const components = compose('components', { el, elements, services, subscriptions, lib, config, gtag, window });

    startup.insertNilRole({ config, stores });
    startup.createHandlers({ services, subscriptions, lib, config });

    return { components, elements, services, core, io, subscriptions, stores, lib, startup, config, getState };

};
