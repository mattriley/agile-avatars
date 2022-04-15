const boot = require('./boot');
const config = require('./config');
const modules = window.agileavatars = boot({ window, config }).getModules();
modules.startup.start(app => document.body.append(app));
