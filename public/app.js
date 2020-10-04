require('./css/*.css');
const boot = require('../boot');
const { components, services, startup } = window.agileavatars = boot({ window });
startup();
services.settings.changeModal('welcome');
document.body.append(components.app());
