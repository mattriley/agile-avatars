const composer = require('module-composer');
const { util, ...src } = require('./src');

module.exports = ({ window, ...overrides }) => {

    const compose = composer(src, { overrides });
    const io = compose('io', { window });
    const config = compose('config', { io, window });

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

    const app = { ...presentation, ...domain, ...data, io, util, config, src, window };

    const startup = compose('startup', app);

    startup.configureSentry();
    startup.createStyleManager();
    startup.insertNilRole();
    startup.createHandlers();

    return app;

};
