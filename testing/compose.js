import composer from 'module-composer';
import modules from './modules';

export default ({ window, configs }) => {

    const { compose } = composer(modules, { configs });
    compose('helpers', { window });
    return compose.end();

};
