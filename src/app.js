import compose from './compose';

const isLocalhost = (/localhost/).test(window.location.host);

const configs = [
    { gtag: { enabled: !isLocalhost } },
    { sentry: { enabled: !isLocalhost } }
];

const { modules, composition } = compose({ window, configs });
const app = modules.startup.start({ composition });
document.getElementById('app').append(app);
