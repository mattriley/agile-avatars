const sentry = require('@sentry/browser');
const composer = require('module-composer');
const { lib: { util, ...lib }, startup, ...src } = require('./src');

module.exports = ({ window, ...overrides }) => {

    const compose = composer(src, { overrides });

    const io = compose('io', { window });
    const config = compose('config', { io, window });
    sentry.init(config.sentry);

    // Data layer
    const { stores, subscriptions, getState } = startup.createStores({ lib, util, config });
        
    // Domain layer
    const core = compose('core', { util, config });
    const services = compose('services', { subscriptions, stores, core, io, util, config });

    // Presentation layer
    const gtag = startup.createGtag({ config, window });
    const { el, ...elements } = compose('elements', { lib, window });
    const components = compose('components', { el, elements, services, subscriptions, lib, util, config, gtag, window });
    const styles = compose('styles', { el, subscriptions, config });

    startup.createStyleManager({ styles, subscriptions, util, window });
    startup.insertNilRole({ config, stores });
    startup.createHandlers({ services, subscriptions, util, config });

    return { components, elements, services, core, io, subscriptions, stores, lib, util, startup, config, getState };

};
