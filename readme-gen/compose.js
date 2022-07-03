const fs = require('fs');
const composer = require('module-composer');
const src = require('./src');

module.exports = ({ targetDir }) => {

    const { compose } = composer(src);
    const { io } = compose('io', { targetDir, fs });
    const { renderers } = compose('renderers', { targetDir });
    compose('services', { io, renderers, targetDir, fs });
    return compose;
};
