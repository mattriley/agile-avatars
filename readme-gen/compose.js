const fs = require('fs');
const composer = require('module-composer');
const src = require('./src');

module.exports = ({ targetDir, composition }) => {


    const { compose } = composer(src);
    const { io } = compose('io', { targetDir, composition, fs });
    const { renderers } = compose('renderers', { composition, targetDir });
    compose('services', { io, renderers, composition, targetDir, fs });
    return compose;
};
