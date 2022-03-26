const boot = require('./boot');
const config = require('./config');
const { startup } = window.agileavatars = boot({ window, config }).getModules();
startup.start(app => document.body.append(app));
