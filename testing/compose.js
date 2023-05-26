import composer from 'module-composer';
import modules from './modules/index.js';

export default ({ window, config }) => {

    const { configure } = composer(modules);
    const { compose } = configure(config);
    compose('helpers', { window });
    return compose.end();

};
