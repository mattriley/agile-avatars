import composer from 'module-composer';
import modules from './modules';

export default ({ window, configs }) => {

    const { compose } = composer(modules, configs);
    return compose('helpers', { window });

};
