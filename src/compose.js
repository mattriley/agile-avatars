import composer from 'module-composer';
import modules from './modules/index.js';
import defaultConfig from './default-config.js';
const { storage, util } = modules;

export default ({ window, configs, overrides }) => {

    const { configure } = composer({ window, ...modules }, { overrides });
    const { compose, constants } = configure(defaultConfig, configs);

    // Data
    const { stores } = compose('stores', { storage, constants });
    const { subscriptions } = compose('subscriptions', { stores, util });

    // Domain
    const { core } = compose.deep('core', { util, constants });
    const { io } = compose('io', { window, constants });
    const { services } = compose.deep('services', { subscriptions, stores, core, io, util, constants });

    // Presentation
    const { ui } = compose('ui', { window });
    const { elements } = compose('elements', { ui, util });
    const { vendorComponents } = compose('vendorComponents', { ui, constants, window });
    const { components } = compose.deep('components', { io, ui, elements, vendorComponents, services, subscriptions, util, constants });
    const { styles } = compose('styles', { ui, subscriptions, constants });

    // Startup    
    compose('diagnostics', { stores, util });
    compose('startup', { ui, components, styles, services, subscriptions, stores, util, constants, window });

    return compose.end();

};
