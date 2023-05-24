export default ({ services, subscriptions, util, constants }) => () => {

    const adjustTagInstanceCounts = util.debounce(
        services.tags.adjustTagInstanceCounts,
        constants.debounce.adjustTagInstanceCounts
    );

    constants.options.modes.forEach(mode => {
        subscriptions.settings.onChange('options', mode, adjustTagInstanceCounts);
    });

    subscriptions.tags.onInsert(adjustTagInstanceCounts);

};
