const composer = require('module-composer');
const src = require('./src');

module.exports = ({ window, ...overrides }) => {

    return composer(src, { overrides }, compose => {

        const config = compose('config', { window });
        const io = compose('io', { config, window });
        const util = compose('util', { config });
    
        const { stores, settings, subscriptions } = compose('storage', { config }, storage => storage.initialise());
    
        const { lib } = src;

        const core = compose('core', { config, lib });
        const services = compose('services', { subscriptions, settings, stores, core, io, util, config });
        
        const elements = compose('elements', { io, window, lib });
        const { el } = elements;
        compose('components', { el, elements, services, subscriptions, util, config, window, lib });

        services.system.initialise();

    });
    
};
