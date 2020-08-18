module.exports = ({ config, services, subscriptions, util }) => () => {

    services.roles.insertNilRole();

    const adjustTagInstanceCounts = util.debounce(services.tags.adjustTagInstanceCounts, 'adjustTagInstanceCounts');

    config.options.modes.forEach(mode => {
        subscriptions.settings.options.onChange(mode, adjustTagInstanceCounts).invoke();
    });

    subscriptions.tags.onInsert(adjustTagInstanceCounts);

};
