module.exports = ({ services, subscriptions, lib, config }) => () => {

    services.roles.insertNilRole();

    const adjustTagInstanceCounts = lib.util.debounce(
        services.tags.adjustTagInstanceCounts, 
        config.debounce.adjustTagInstanceCounts
    );

    config.options.modes.forEach(mode => {
        subscriptions.settings.options.onChange(mode, adjustTagInstanceCounts);
    });

    subscriptions.tags.onInsert(adjustTagInstanceCounts);

};
