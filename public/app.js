require('./css/*.css');
const boot = require('../boot');
const agileavatars = boot({ window });
const { components, services } = agileavatars;
document.body.append(components.app());
services.settings.changeModal('welcome');
window.agileavatars = agileavatars;
