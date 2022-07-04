const composer = require('module-composer');
const modules = require('./modules');

module.exports = ({ io, target }) => {
    const { compose } = composer({ io, ...modules });
    compose('renderers', { io, target });
    return compose.end();
};
