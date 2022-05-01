import composer from 'module-composer';
import modules from './modules';

export default (...configs) => {

    const { compose, config } = composer(modules, ...configs);
    const { window } = config;
    return compose('helpers', { window });

};
