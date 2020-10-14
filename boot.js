const composer = require('module-composer');
const src = require('./src');
const { storage, util } = src;

module.exports = ({ window, ...overrides }) => {

    const compose = composer(src, { overrides });

    // Configure
    const config = compose('config');
    const io = compose('io', { window });    
    
    // Data
    const stores = compose('stores', { storage, config });
    const subscriptions = compose('subscriptions', { stores, util });

    // Domain
    const core = compose('core', { util, config });
    const services = compose('services', { subscriptions, stores, core, io, util, config });
    const vendorServices = compose('vendorServices', { io, config, window });
        
    // Presentation
    const { el, ...dom } = compose('dom', { window });        
    const styles = compose('styles', { el, subscriptions, config });
    const elements = compose('elements', { el, dom, util });
    const vendorComponents = compose('vendorComponents', { el, config, window });
    compose('components', { el, elements, vendorComponents, vendorServices, services, subscriptions, dom, util, config });
    
    // Startup    
    compose('diagnostics', { stores, util });
    compose('startup', { styles, subscriptions, services, stores, dom, util, config });

    return compose.getModules();

};
