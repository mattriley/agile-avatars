require('./css/*.css');
const boot = require('../boot');

const isLocalhost = (/localhost/).test(window.location.host);

const config = { 
    googleAnalytics: { enabled: !isLocalhost },
    sentry: { enabled: !isLocalhost }
};

const { components, services, startup } = window.agileavatars = boot({ window, config });

startup();
services.settings.changeModal('welcome');
document.body.append(components.app());
