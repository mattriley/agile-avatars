const merge = require('lodash.merge');
const composeSrc = require('module-composer')(require('./src'));

module.exports = ({ window, ...overrides }) => {

    const compose = (key, arg) => merge(composeSrc(key, arg), overrides[key]);

    const config = compose('config', { window });
    const io = compose('io', { config, window });
    const util = compose('util', { config });

    const storage = compose('storage', { config });
    const { state, stores, settings, subscriptions } = storage.initialise();

    const core = compose('core', { config });
    const services = compose('services', { subscriptions, settings, stores, core, io, util, config });
    
    const elements = compose('elements', { io, window });
    const { el } = elements;
    const components = compose('components', { el, elements, services, subscriptions, util, config, window });
    
    services.system.initialise();
    
    const context = {        
        elements,
        components,
        services,
        storage,
        state,
        stores,
        settings,
        subscriptions,
        util,
        core,
        io,
        config,
        window
    };

    window.agileavatars = context;
    return context;
    
};
