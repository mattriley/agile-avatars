require('./css/*.css');
const boot = require('../boot');

const { components, startup } = window.agileavatars = boot({ window });

startup();
document.body.append(components.app());
