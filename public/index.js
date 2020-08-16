require('./css/*.css');
const boot = require('../src/boot');
const { components, context } = boot({ window });
window.agileavatars = context;
document.body.append(components.app());
