import composer from 'module-composer';
import modules from './modules/index.js';

export default ({ window, config }) => {

    const { compose } = composer(modules, { config });
    return compose('helpers', { window });

};
