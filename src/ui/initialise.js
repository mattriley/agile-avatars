const composer = require('module-composer');
const modules = require('./modules');

module.exports = ({ services, subscriptions, util, config, window, overrides }) => {

    const compose = composer(modules, { overrides });
    const { el, gtag, ...lib } = compose('lib', { config, window });
    const elements = compose('elements', { el, lib, window });
    const components = compose('components', { el, elements, services, subscriptions, lib, util, config, gtag, window });
    const styles = compose('styles', { el, subscriptions, config });
    return { elements, components, styles };

};
