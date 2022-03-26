const composer = require('module-composer');
const modules = require('./modules');
const { storage, util } = modules;

module.exports = ({ window, config, ...overrides }) => {

    const compose = composer(modules, { config }, overrides);

    // Data
    const stores = compose('stores', { storage, config });
    const subscriptions = compose('subscriptions', { stores, util });

    // Domain
    const core = compose('core', { util, config });
    const io = compose('io', { window });
    const services = compose('services', { subscriptions, stores, core, io, util, config });
    const vendorServices = compose('vendorServices', { io, config, window });

    // Presentation
    const { el, ...ui } = compose('ui', { window });
    const elements = compose('elements', { el, ui, util });
    const vendorComponents = compose('vendorComponents', { el, ui, config, window });
    compose('components', { el, ui, elements, vendorComponents, vendorServices, services, subscriptions, util, config });
    compose('styles', { el, ui, subscriptions, config });

    // Startup    
    compose('diagnostics', { stores, util });
    compose('startup', compose.getModules());
    return compose; //.getModules();

};
