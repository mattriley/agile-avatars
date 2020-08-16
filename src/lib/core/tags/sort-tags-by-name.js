module.exports = () => tags => {

    return tags.sort((a, b) => a.tagName.localeCompare(b.tagName));
    
};
