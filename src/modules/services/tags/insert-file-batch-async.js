export default ({ services }) => files => {

    return Array.from(files).map(services.tags.insertFileAsync);

};
