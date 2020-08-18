const compose = require('module-composer');
const lib = require('./lib');

module.exports = ({ window, ...args }) => {

    const config = compose(lib.config, { window }, args.config);
    const io = compose(lib.io, { window, config }, args.io);
    const util = compose(lib.util, { config });

    const storage = compose(lib.storage, { config });
    const { state, stores, settings, subscriptions } = storage.initialise();

    const core = compose(lib.core, { config });
    const services = compose(lib.services, { subscriptions, settings, stores, core, io, util, config }, args.services);
    
    const elements = compose(lib.elements, { window, io });
    const { el } = elements;
    const thirdPartyComponents = compose(lib.thirdPartyComponents, { window });
    const components = compose(lib.components, { el, elements, thirdPartyComponents, services, subscriptions, util, config });
    
    services.system.initialise();
    
    const context = {        
        elements,
        components,
        thirdPartyComponents,
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
