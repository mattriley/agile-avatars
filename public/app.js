require('./css/*.css');
const boot = require('../boot');
const { components, context } = boot({ window });
window.agileavatars = context;
document.body.append(components.app());
