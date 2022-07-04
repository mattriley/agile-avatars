const composer = require('module-composer');
const modules = require('./modules');

module.exports = ({ target }) => {
    const { compose } = composer(modules);
    compose('renderers', { target });
    return compose.end();
};
