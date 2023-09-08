const composer = require('module-composer');
const modules = require('./modules');

module.exports = ({ readmeGenLib, io, target }) => {
    const { compose } = composer({ io, ...modules });
    return compose('renderers', { readmeGenLib, io, target });
};
