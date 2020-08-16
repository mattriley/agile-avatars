const flow = require('lodash/flow');

module.exports = ({ services, core }) => roleData => {
    
    const randomColor = services.roles.randomColor();

    const pipeline = [
        core.roles.dataTransforms.roleName,
        core.roles.dataTransforms.color(randomColor)
    ];

    return flow(pipeline)(roleData);

};