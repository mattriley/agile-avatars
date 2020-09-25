const composer = require('module-composer');
const util = require('./util');

const modules = {
    config: require('./config'),
    io: require('./io'),
    startup: require('./startup')
};

const layers = {
    data: require('./data'),
    domain: require('./domain'),
    ui: require('./ui')
};

module.exports = ({ window, ...overrides }) => {

    const compose = composer(modules, { overrides });
    const io = compose('io', { window });
    const config = compose('config', { io, window });

    const composeData = () => {
        return layers.data.initialise({ util, config });
    };

    const composeDomain = (stores, subscriptions) => {
        return layers.domain.initialise({ subscriptions, stores, io, util, config, overrides });
    };
        
    const composePresentation = (services, subscriptions) => {
        return layers.ui.initialise({ services, subscriptions, util, config, window, overrides });
    };

    const data = composeData();
    const domain = composeDomain(data.stores, data.subscriptions);
    const presentation = composePresentation(domain.services, data.subscriptions);

    const app = { ...presentation, ...domain, ...data, io, util, config, window };

    const startup = compose('startup', app);
    startup.configureSentry();
    startup.createStyleManager();
    startup.insertNilRole();
    startup.createHandlers();

    return app;

};
