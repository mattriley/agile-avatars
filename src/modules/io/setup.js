export default ({ window }) => () => {

    return {
        date: () => new window.Date(),
        fetch: (...args) => window.fetch(...args),
        random: () => window.Math.random(),
        fileReader: () => new window.FileReader()
    };

};
