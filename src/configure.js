import merge from 'lodash/merge';
import compose from './compose';
import defaultConfig from './default-config';

export default (...configs) => {

    const config = merge({}, defaultConfig, ...configs);
    const modules = compose(config);
    return { config, ...modules };

};
