import boot from './boot';
import config from './config';

const { modules } = window.agileavatars = boot({ window, config }).composition;
modules.startup.start(app => document.body.append(app));
