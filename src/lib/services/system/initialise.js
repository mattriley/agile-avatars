module.exports = ({ config, services, subscriptions, util }) => () => {

    services.roles.insertNilRole();

    const adjustInstanceCounts = util.debounce(services.tags.adjustInstanceCounts, 'adjustInstanceCounts');

    config.options.modes.forEach(mode => {
        subscriptions.settings.options.onChange(mode, adjustInstanceCounts).invoke();
    });

    subscriptions.tags.onInsert(adjustInstanceCounts);

};
