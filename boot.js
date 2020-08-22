const composer = require('module-composer');
const src = require('./src');
const { lib } = src;

module.exports = ({ window, ...overrides }) => {

    return composer(src, { overrides }, compose => {

        const config = compose('config', { window });
        const io = compose('io', { config, window });
    
        const { stores, settings, subscriptions } = compose('storage', { config }, storage => storage.initialise());

        const core = compose('core', { lib, config });
        const services = compose('services', { subscriptions, settings, stores, core, io, lib, config });
        
        const elements = compose('elements', { io, lib, window });
        const { el } = elements;
        compose('components', { el, elements, services, subscriptions, lib, config, window });

        services.system.initialise();

    });
    
};
