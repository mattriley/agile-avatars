import './css/*.css'; // eslint-disable-line import/no-unresolved
import compose from './compose';
import mixpanel from 'mixpanel-browser';

const composition = compose({ window, mixpanel });
const { config, modules } = composition;
window.app = composition;
modules.mixpanel.init(config.mixpanelToken, { debug: config.isTest });

const app = modules.startup.start();
document.getElementById('app').append(app);
