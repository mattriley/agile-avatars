export default ({ services, subscriptions, util, config }) => () => {

    const adjustTagInstanceCounts = util.debounce(
        services.tags.adjustTagInstanceCounts,
        config.debounce.adjustTagInstanceCounts
    );

    config.options.modes.forEach(mode => {
        subscriptions.settings.onChange('options', mode, adjustTagInstanceCounts);
    });

    subscriptions.tags.onInsert(adjustTagInstanceCounts);

};
