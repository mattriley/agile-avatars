const sentry = require('@sentry/browser');
const composer = require('module-composer');
const src = require('./src');
const { lib } = src;

module.exports = ({ window, ...overrides }) => {

    return composer(src, { overrides }, compose => {

        const io = compose('io', { window });
        const config = compose('config', { io, window });
        sentry.init(config.sentry);
        
        // Data layer
        const storage = compose('storage', { lib, config }, storage => storage.initialise());
        const { stores, settings, subscriptions } = storage;

        // Domain layer
        const core = compose('core', { lib, config });
        const services = compose('services', { subscriptions, settings, stores, core, io, lib, config, sentry });
        services.system.initialise();

        // Presentation layer
        const { el, ...elements } = compose('elements', { lib, window });
        compose('components', { el, elements, services, subscriptions, lib, config, window });

    });
    
};
