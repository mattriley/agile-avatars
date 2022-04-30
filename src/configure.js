import merge from 'lodash/merge';
import compose from './compose';
import defaultConfig from './default-config';

export default ({ window, overrides }, ...configs) => {

    const config = merge({}, defaultConfig, ...configs);
    const modules = compose({ window, config, overrides });
    return { config, ...modules };

};
