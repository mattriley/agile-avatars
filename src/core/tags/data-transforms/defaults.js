module.exports = ({ lib }) => (tagData = {}) => {

    const defaultData = { instances: [], active: [], passive: [] };
    return lib.util.merge(defaultData, tagData);
    
};
