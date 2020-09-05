module.exports = ({ lib, package }) => ({ packageKey, depdoc }) => {

    const sections = Object.entries(package[packageKey]).map(([name]) => {
        return lib.renderDependency({ name, depdoc });
    });
    
    return sections.join('\n');
};
