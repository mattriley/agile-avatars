const sentry = require('@sentry/browser');
const composer = require('module-composer');
const { util, startup, ...src } = require('./src');

module.exports = ({ window, ...overrides }) => {

    const compose = composer(src, { overrides });
    const io = compose('io', { window });
    const config = compose('config', { io, window });
    sentry.init(config.sentry);

    const composeData = () => {
        return src.data.initialise({ util, config });
    };

    const composeDomain = (stores, subscriptions) => {
        return src.domain.initialise({ subscriptions, stores, io, util, config, overrides });
    };
        
    const composePresentation = (services, subscriptions) => {
        return src.ui.initialise({ services, subscriptions, util, config, window, overrides });
    };

    const data = composeData();
    const domain = composeDomain(data.stores, data.subscriptions);
    const presentation = composePresentation(domain.services, data.subscriptions);

    const { styles } = presentation;
    const { services } = domain;
    const { stores, subscriptions } = data;
    startup.createStyleManager({ styles, subscriptions, util, window });
    startup.insertNilRole({ config, stores });
    startup.createHandlers({ services, subscriptions, util, config });

    return { ...presentation, ...domain, ...data, io, stores, util, startup, config, src };

};
