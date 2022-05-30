import composer from 'module-composer';
import modules from './modules';
import defaultConfig from './default-config';
const { storage, util } = modules;

export default ({ window, overrides, configs }) => {

    const { compose, config } = composer(modules, { overrides, configs: [defaultConfig, configs] });

    // Data
    const { stores } = compose('stores', { storage, config });
    const { subscriptions } = compose('subscriptions', { stores, util });

    // Domain
    const { core } = compose('core', { util, config });
    const { io } = compose('io', { window });
    const { services } = compose('services', { subscriptions, stores, core, io, util, config });
    const { vendorServices } = compose('vendorServices', { io, config, window });

    // Presentation
    const { ui } = compose('ui', { window });
    const { el } = ui;
    const { elements } = compose('elements', { el, ui, util });
    const { vendorComponents } = compose('vendorComponents', { el, ui, config, window });
    const { components } = compose('components', { el, ui, elements, vendorComponents, vendorServices, services, subscriptions, util, config });
    const { styles } = compose('styles', { el, ui, subscriptions, config });

    // Startup    
    compose('diagnostics', { stores, util });
    compose('startup', { ui, components, styles, services, subscriptions, stores, util, config, window });

    return compose;

};
