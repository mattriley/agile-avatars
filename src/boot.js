const compose = require('module-composer');
const lib = require('./lib');

module.exports = ({ window, ...args }) => {

    const config = compose(lib.config, { window }, args.config);
    const io = compose(lib.io, { config, window }, args.io);
    const util = compose(lib.util, { config });

    const storage = compose(lib.storage, { config });
    const { state, stores, settings, subscriptions } = storage.initialise();

    const core = compose(lib.core, { config });
    const services = compose(lib.services, { subscriptions, settings, stores, core, io, util, config }, args.services);
    
    const elements = compose(lib.elements, { io, window });
    const { el } = elements;
    const components = compose(lib.components, { el, elements, services, subscriptions, util, config, window });
    
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

    return { context, ...context };
};
