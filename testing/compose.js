import composer from 'module-composer';
import modules from './modules';

export default ({ window, overrides }) => {

    const compose = composer(modules, { overrides });
    return compose('helpers', { window });

};
