// TODO: Figure out how to use glob in Parcel 2.
// require('./css/*.css');

require('./css/app.css');
require('./css/control-panel.css');
require('./css/gravatar-spinner.css');
require('./css/gravatar.css');
require('./css/header.css');
require('./css/image-upload-options.css');
require('./css/modal.css');
require('./css/nil-role.css');
require('./css/options.css');
require('./css/roles.css');
require('./css/site.css');
require('./css/tags.css');
require('./css/tips.css');

const boot = require('../boot');
const config = require('./config');
const { startup } = window.agileavatars = boot({ window, config });
startup.start(app => document.body.append(app));
