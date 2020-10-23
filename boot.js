const composer = require('module-composer');
const src = require('./src');
const { storage, util } = src;

module.exports = ({ window, ...overrides }) => {

    const compose = composer(src, { overrides });

    // Configure
    const config = compose('config', { window });
    const io = compose('io', { window });    
    
    // Data
    const stores = compose('stores', { storage, config });
    const subscriptions = compose('subscriptions', { stores, util });

    // Domain
    const core = compose('core', { util, config });
    const services = compose('services', { subscriptions, stores, core, io, util, config });
    const vendorServices = compose('vendorServices', { io, config, window });
        
    // Presentation
    const { el, ...ui } = compose('ui', { window });        
    const styles = compose('styles', { el, ui, subscriptions, config });
    const elements = compose('elements', { el, ui, util });
    const vendorComponents = compose('vendorComponents', { el, ui, config, window });
    compose('components', { el, ui, elements, vendorComponents, vendorServices, services, subscriptions, util, config });
    
    // Startup    
    compose('diagnostics', { stores, util });
    compose('startup', { styles, subscriptions, services, stores, ui, util, config });

    return compose.getModules();

};
