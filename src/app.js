import './css/*.css'; // eslint-disable-line import/no-unresolved
import compose from './compose';

const { startup } = compose({ window });
const app = startup.start();
document.getElementById('app').append(app);
