import composer from 'module-composer';
import modules from './modules/index.js';
import defaultConfig from './default-config.js';
import 'module-composer/extensions/mermaid.js';
import 'module-composer/extensions/eject.js';
import 'module-composer/extensions/perf.js';
const { storage, util } = modules;

export default ({ window, overrides, configs }) => {

    const options = { overrides, defaultConfig, configs };
    const { compose, config } = composer({ window, ...modules }, options);

    // Data
    const { stores } = compose('stores', { storage, config });
    const { subscriptions } = compose('subscriptions', { stores, util });

    // Domain
    const { core } = compose.deep('core', { util, config });
    const { io } = compose('io', { window, config });
    const { services } = compose.deep('services', { subscriptions, stores, core, io, util, config });

    // Presentation
    const { ui } = compose('ui', { window });
    const { elements } = compose('elements', { ui, util });
    const { vendorComponents } = compose('vendorComponents', { ui, config, window });
    const { components } = compose.deep('components', { io, ui, elements, vendorComponents, services, subscriptions, util, config });
    const { styles } = compose('styles', { ui, subscriptions, config });

    // Startup    
    compose('diagnostics', { stores, util });
    compose('startup', { ui, components, styles, services, subscriptions, stores, util, config, window });

    return compose.end();

};
