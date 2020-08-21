const composer = require('module-composer');
const src = require('./src');

module.exports = ({ window, ...args }) => {

    const compose = composer(src);

    const config = compose('config', { window }, args.config);
    const io = compose('io', { config, window }, args.io);
    const util = compose('util', { config });

    const storage = compose('storage', { config });
    const { state, stores, settings, subscriptions } = storage.initialise();

    const core = compose('core', { config });
    const services = compose('services', { subscriptions, settings, stores, core, io, util, config }, args.services);
    
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
