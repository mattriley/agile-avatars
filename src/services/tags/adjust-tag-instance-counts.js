module.exports = ({ core, config, settings, stores, services }) => () => {

    const tags = stores.tags.getArray();

    const options = settings.options.getState();
    const modeCounts = Object.fromEntries(config.options.modes.map(mode => [mode, options[mode]]));
    const plans = core.tags.planTagInstanceAdjustment(tags, modeCounts);

    plans.forEach(plan => {
        plan = { insert: [], remove: [], ...plan };
        plan.insert.forEach(services.tags.insertTagInstance);
        plan.remove.forEach(services.tags.removeTagInstance);
    });

};
