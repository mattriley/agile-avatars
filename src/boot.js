import composer from 'module-composer';
import modules from './modules';
const { storage, util } = modules;

export default ({ window, config, ...overrides }) => {

    const compose = composer(modules, { overrides });

    // Data
    const stores = compose('stores', { storage, config }, stores => stores.setup());
    const subscriptions = compose('subscriptions', { stores, util }, subscriptions => subscriptions.setup());

    // Domain
    const core = compose('core', { util, config });
    const io = compose('io', { window }, io => io.setup());
    const services = compose('services', { subscriptions, stores, core, io, util, config });
    const vendorServices = compose('vendorServices', { io, config, window });

    // Presentation
    const { el, ...ui } = compose('ui', { window });
    const elements = compose('elements', { el, ui, util });
    const vendorComponents = compose('vendorComponents', { el, ui, config, window });
    const components = compose('components', { el, ui, elements, vendorComponents, vendorServices, services, subscriptions, util, config });
    const styles = compose('styles', { el, ui, subscriptions, config });

    // Startup    
    compose('diagnostics', { stores, util });
    compose('startup', { ui, components, styles, services, subscriptions, stores, util, config });

    return compose.modules;

};
