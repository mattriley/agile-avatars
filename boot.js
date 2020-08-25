const sentry = require('@sentry/browser');
const composer = require('module-composer');
const src = require('./src');
const { lib } = src;

module.exports = ({ window, ...overrides }) => {

    return composer(src, { overrides }, compose => {

        const io = compose('io', { window });
        const config = compose('config', { io, window });
        sentry.init(config.sentry);
        
        const { stores, settings, subscriptions } = compose('storage', { lib, config }, storage => storage.initialise());

        const core = compose('core', { lib, config });
        const services = compose('services', { subscriptions, settings, stores, core, io, lib, config, sentry });
        
        const elements = compose('elements', { lib, window });
        const { el } = elements;
        compose('components', { el, elements, services, subscriptions, lib, config, window });

        services.system.initialise();

    });
    
};
