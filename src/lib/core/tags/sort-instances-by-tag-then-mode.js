module.exports = ({ config }) => (tags, instanceMap) => {

    return tags.flatMap(tag => {
        return config.options.modes.flatMap(mode => {
            return tag[mode].map(instanceId => instanceMap[instanceId]);
        });
    });

};
