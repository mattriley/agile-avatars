export default ({ constants }) => (tags, getTagInstance) => {

    return tags.flatMap(tag => {
        return constants.options.modes.flatMap(mode => {
            return tag[mode].map(tagInstanceId => getTagInstance(tagInstanceId));
        });
    });

};
