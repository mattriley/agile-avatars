import Picker from 'vanilla-picker';

export default ({ el }) => () => {

    return el('style', { textContent: Picker.css });

};
