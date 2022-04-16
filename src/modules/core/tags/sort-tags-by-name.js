export default () => tags => {

    return tags.sort((a, b) => a.tagName.localeCompare(b.tagName));

};
