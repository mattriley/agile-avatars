const compose = require('module-composer');
const src = require('./src');

module.exports = ({ window, ...args }) => {

    const config = compose(src.config, { window }, args.config);
    const io = compose(src.io, { config, window }, args.io);
    const util = compose(src.util, { config });

    const storage = compose(src.storage, { config });
    const { state, stores, settings, subscriptions } = storage.initialise();

    const core = compose(src.core, { config });
    const services = compose(src.services, { subscriptions, settings, stores, core, io, util, config }, args.services);
    
    const elements = compose(src.elements, { io, window });
    const { el } = elements;
    const components = compose(src.components, { el, elements, services, subscriptions, util, config, window });
    
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
