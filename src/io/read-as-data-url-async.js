module.exports = ({ window }) => blob => {

    return new Promise(resolve => {
        const reader = new window.FileReader();
        reader.addEventListener('load', () => resolve(reader.result));
        reader.readAsDataURL(blob);
    });

};
