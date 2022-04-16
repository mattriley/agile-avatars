import boot from './boot';
import config from './config';

const { startup, composition } = boot({ config, window });
const app = { config, ...composition };
window.app = app;
window.document.title = config.app.name;
console.log({ app });
startup.start(app => document.body.append(app));
