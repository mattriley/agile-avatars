require('./css/*.css');
const boot = require('../boot');
const { components } = boot({ window });
document.body.append(components.app());
