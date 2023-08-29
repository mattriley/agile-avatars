import composer from 'module-composer';
import modules from './modules/index.js';
import defaultConfig from './default-config.js';
const { storage, util } = modules;

export default ({ window, config, ...options }) => {

    const { configure } = composer({ window, ...modules }, options);
    const { compose } = configure([defaultConfig, config]);

    // Data
    const { stores } = compose('stores', { storage });
    const { subscriptions } = compose('subscriptions', { stores, util });

    // Domain
    const { core } = compose.deep('core', { util });
    const { io } = compose('io', { window });
    const { services } = compose.deep('services', { subscriptions, stores, core, io, util });

    // Presentation
    const { ui } = compose('ui', { window });
    const { elements } = compose('elements', { ui, util });
    const { vendorComponents } = compose('vendorComponents', { ui, window });
    const { components } = compose.deep('components', { io, ui, elements, vendorComponents, services, subscriptions, util });
    const { styles } = compose('styles', { ui, subscriptions });

    // Startup    
    compose('diagnostics', { stores, util });
    compose('startup', { ui, components, styles, services, subscriptions, stores, util, window });

    return compose.end();

};
