import compose from './compose';

const isLocalhost = (/localhost/).test(window.location.host);

const configs = [
    { gtag: { enabled: !isLocalhost } },
    { sentry: { enabled: !isLocalhost } }
];

const { config, modules } = compose({ window, configs });
const { startup, components } = modules;
window.app = modules;
window.document.title = config.app.name;

const { createRoot } = startup.start();
const container = document.getElementById('app');
const root = createRoot(container);
root.render(components.app());
