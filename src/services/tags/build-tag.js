const flow = require('lodash/flow');

module.exports = ({ core, services }) => tagData => {

    const pipeline = [
        core.tags.dataTransforms.defaults,
        core.tags.dataTransforms.tagName,
        services.tags.dataTransforms.roleName
    ];

    return flow(pipeline)(tagData);
    
};
