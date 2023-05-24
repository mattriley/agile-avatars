export default ({ core, constants, stores, services }) => () => {

    const tags = stores.tags.list();

    const options = stores.settings.find('options');
    const modeCounts = Object.fromEntries(constants.options.modes.map(mode => [mode, options[mode]]));
    const plans = core.tags.planTagInstanceAdjustment(tags, modeCounts);

    plans.forEach(plan => {
        plan = { insert: [], remove: [], ...plan };
        plan.insert.forEach(services.tags.insertTagInstance);
        plan.remove.forEach(services.tags.removeTagInstance);
    });

};
