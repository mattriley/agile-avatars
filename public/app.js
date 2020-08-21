require('./css/*.css');
const boot = require('../boot');
const agileavatars = boot({ window });
window.agileavatars = agileavatars;
document.body.append(agileavatars.components.app());
