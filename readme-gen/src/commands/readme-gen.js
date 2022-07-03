module.exports = ({ services }) => async () => {

    const readme = await services.renderReadme(); // here
    console.log(readme);

};
