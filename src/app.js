import './css/*.css'; // eslint-disable-line import/no-unresolved
import compose from './compose';

const isLocalhost = (/localhost/).test(window.location.host);

const configs = [
    { gtag: { enabled: !isLocalhost } },
    { sentry: { enabled: !isLocalhost } }
];

const composition = compose({ window, configs });
const { config, modules } = composition;
window.app = composition;
window.document.title = config.app.name;

const app = modules.startup.start();
document.getElementById('app').append(app);
