export default ({ config }) => (tags, getTagInstance) => {

    return tags.flatMap(tag => {
        return config.options.modes.flatMap(mode => {
            return tag[mode].map(tagInstanceId => getTagInstance(tagInstanceId));
        });
    });

};
