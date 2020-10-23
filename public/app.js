require('./css/*.css');
const boot = require('../boot');
const config = require('./config');
const { mount } = window.agileavatars = boot({ window, config });
mount();
