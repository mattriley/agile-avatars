require('./css/*.css');
const boot = require('../boot');
const config = require('./config');
const { startup } = window.agileavatars = boot({ window, config });
startup.start(app => document.body.append(app));
