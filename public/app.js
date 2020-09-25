require('./css/*.css');
const boot = require('../src/boot');
const { components, services } = window.agileavatars = boot({ window });
services.settings.changeModal('welcome');
document.body.append(components.app());
