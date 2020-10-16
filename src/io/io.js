module.exports = ({ window }) => {

    return {
        date: () => new window.Date(),
        fetch: (...args) => window.fetch(...args),
        random: () => window.Math.ranui,
        readAsDataUrlAsync: blob => {
            return new Promise(resolve => {
                const reader = new window.FileReader();
                reader.addEventListener('load', () => resolve(reader.result));
                reader.readAsDataURL(blob);
            });
        }
    };

};