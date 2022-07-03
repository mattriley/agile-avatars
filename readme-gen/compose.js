const fs = require('fs');
const composer = require('module-composer');
const src = require('./src');

module.exports = ({ composition }) => {
    const { compose } = composer(src);
    const { io } = compose('io', { composition, fs });
    const { renderers } = compose('renderers', { composition });
    compose('services', { io, renderers, composition, fs });
    return compose;
};
