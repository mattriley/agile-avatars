module.exports = ({ lib, package }) => packageKey => {

    const sections = Object.entries(package[packageKey]).map(([name]) => {
        return lib.renderDependency(name);
    });
    
    return sections.join('\n');
};
