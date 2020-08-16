const Picker = require('vanilla-picker'); 

module.exports = ({ window }) => () => {
    
    const $style = window.document.createElement('style');
    $style.textContent = Picker.css;
    return $style;

};
