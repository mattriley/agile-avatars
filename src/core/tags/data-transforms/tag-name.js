module.exports = ({ lib }) => tagData => {

    const tagName = lib.util.upperFirst((tagData.tagName ?? '').trim());
    return { ...tagData, tagName };
    
};
