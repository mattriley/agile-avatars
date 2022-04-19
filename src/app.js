import compose from './compose';
import config from './config';

const { startup, composition } = compose({ config, window });
const app = { config, ...composition };
window.app = app;
window.document.title = config.app.name;
console.log({ app });
startup.start(app => document.body.append(app));
