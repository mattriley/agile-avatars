import composer from 'module-composer';
import modules from './modules/index.js';
import defaultConfig from './default-config.js';

export default ({ window, config, overrides }) => {

    const { compose } = composer(modules, { defaultConfig, config, overrides });

    const { util } = compose.asis('util');
    const { storage } = compose.asis('storage');

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
    return compose('startup', { ui, components, styles, services, subscriptions, stores, util, window });

};
