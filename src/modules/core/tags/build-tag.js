module.exports = ({ util }) => tagData => {

    const tagName = util.upperFirst((tagData.tagName || '').trim());
    return { ...tagData, tagName, instances: [], active: [], passive: [] };

};
