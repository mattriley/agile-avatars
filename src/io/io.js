module.exports = ({ window }) => {

    return {
        date: () => new window.Date(),
        fetch: (...args) => window.fetch(...args),
        random: () => window.Math.random(),
        createFileReader: () => new window.FileReader()
    };

};
