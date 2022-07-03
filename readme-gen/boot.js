const fs = require('fs');
const composer = require('module-composer');
const src = require('./src');

module.exports = ({ targetDir, bootAgileAvatars }) => {

    const { compose, composition } = composer(src);
    const { io } = compose('io', { targetDir, fs });
    const { renderers } = compose('renderers', { targetDir, bootAgileAvatars });
    const { services } = compose('services', { io, renderers, targetDir, bootAgileAvatars, fs });
    compose('commands', { services });
    return compose;
}
