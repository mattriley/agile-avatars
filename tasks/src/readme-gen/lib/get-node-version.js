/* eslint-disable no-sync */
module.exports = ({ fs }) => () => {

    return fs.readFileSync('.nvmrc', 'utf-8').trim();

};