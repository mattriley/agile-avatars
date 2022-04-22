import compose from './compose';
import config from './config';

const { startup, components, composition } = compose({ config, window });
const app = { config, ...composition };
console.log({ app });
window.app = app;
window.document.title = config.app.name;
const { createRoot } = startup.start();
const container = document.getElementById('app');
const root = createRoot(container);
root.render(components.app());
