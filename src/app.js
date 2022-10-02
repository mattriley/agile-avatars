import './css/*.css'; // eslint-disable-line import/no-unresolved
import compose from './compose';

const composition = compose({ window });
const { modules } = composition;
const app = modules.startup.start();
document.getElementById('app').append(app);
