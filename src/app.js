import compose from './compose';

const isLocalhost = (/localhost/).test(window.location.host);

const configs = [
    { gtag: { enabled: !isLocalhost } },
    { sentry: { enabled: !isLocalhost } }
];

const composition = compose({ window, configs });
const app = composition.modules.startup.start({ composition });
document.getElementById('app').append(app);
