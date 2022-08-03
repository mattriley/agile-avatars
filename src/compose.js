import composer from 'module-composer';
import modules from './modules/index.js';
import defaultConfig from './default-config.js';
const { storage, util } = modules;

export default ({ compositionName, window, mixpanel, overrides, configs }) => {

    const mixpanelStub = { track: () => { } };
    mixpanel = mixpanel ?? mixpanelStub;

    const options = { compositionName, overrides, defaultConfig, configs };
    const { compose, config } = composer({ window, mixpanel, ...modules }, options);

    // Data
    const { stores } = compose('stores', { storage, config });
    const { subscriptions } = compose('subscriptions', { stores, util });

    // Domain
    const { core } = compose('core', { util, config });
    const { io } = compose('io', { window });
    const { services } = compose('services', { subscriptions, stores, core, io, util, config });

    // Presentation
    const { ui } = compose('ui', { window });
    const { elements } = compose('elements', { ui, util });
    const { vendorComponents } = compose('vendorComponents', { ui, config, window });
    const { components } = compose('components', { mixpanel, ui, elements, vendorComponents, services, subscriptions, util, config });
    const { styles } = compose('styles', { ui, subscriptions, config });

    // Startup    
    compose('diagnostics', { stores, util });
    compose('startup', { ui, components, styles, services, subscriptions, stores, util, config, window });

    return compose.end();

};
