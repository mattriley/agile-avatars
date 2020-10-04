module.exports = ({ window }) => {

    return {
        date: () => new window.Date(),
        fetch: window.fetch?.bind(window),
        random: window.Math?.random,
        readAsDataUrlAsync: blob => {
            return new Promise(resolve => {
                const reader = new window.FileReader();
                reader.addEventListener('load', () => resolve(reader.result));
                reader.readAsDataURL(blob);
            });
        }
    };

};