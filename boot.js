const composer = require('module-composer');
const { storage, util, ...src } = require('./src');

module.exports = ({ window, ...overrides }) => {

    const compose = composer(src, { overrides });
    const io = compose('io', { window });
    const config = compose('config', { io, window });
    const { gtag } = compose('vendor', { config, window });

    // Data
    const stores = compose('stores', { storage, config });
    const subscriptions = compose('subscriptions', { stores, util });

    // Domain
    const core = compose('core', { util, config });
    const services = compose('services', { subscriptions, stores, core, io, util, config });
        
    // Presentation
    const { el, ...ui } = compose('ui', { config, window });
    const elements = compose('elements', { el, ui, window });
    compose('components', { el, elements, services, subscriptions, ui, util, config, gtag, window });
    compose('styles', { el, subscriptions, config });

    // Startup
    compose('diagnostics', { stores, util });

    const app = { ...compose.modules, util, window };

    const startup = compose('startup', app);
    startup.createStyleManager();
    startup.insertNilRole();
    startup.createHandlers();

    return app;

};
