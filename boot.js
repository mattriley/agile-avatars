const composer = require('module-composer');
const { util, ...src } = require('./src');

module.exports = ({ window, ...overrides }) => {

    const compose = composer(src, { overrides });
    const io = compose('io', { window });
    const config = compose('config', { io, window });

    // Data
    const { stores, subscriptions, getState } = src.data.initialise({ util, config });

    // Domain
    const core = compose('core', { util, config });
    const services = compose('services', { subscriptions, stores, core, io, util, config });
        
    // Presentation
    const { el, gtag, ...lib } = compose('lib', { config, window });
    const elements = compose('elements', { el, lib, window });
    const components = compose('components', { el, elements, services, subscriptions, lib, util, config, gtag, window });
    const styles = compose('styles', { el, subscriptions, config });

    const app = { components, elements, styles, subscriptions, services, core, io, stores, util, config, window, getState };

    const startup = compose('startup', app);
    startup.configureSentry();
    startup.createStyleManager();
    startup.insertNilRole();
    startup.createHandlers();

    return app;

};
