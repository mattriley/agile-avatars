module.exports = ({ config }) => (tags, tagInstanceMap) => {

    return tags.flatMap(tag => {
        return config.options.modes.flatMap(mode => {
            return tag[mode].map(tagInstanceId => tagInstanceMap[tagInstanceId]);
        });
    });

};
