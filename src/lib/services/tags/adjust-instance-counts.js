const pick = require('lodash/pick');

module.exports = ({ core, config, settings, stores, services }) => () => {

    const tags = stores.tags.getArray();
    const modeCounts = pick(settings.options.getState(), config.options.modes);
    const plans = core.tags.planInstanceAdjustment(tags, modeCounts);

    plans.forEach(plan => {
        plan = { insert: [], remove: [], ...plan };
        plan.insert.forEach(services.tags.insertTagInstance);
        plan.remove.forEach(services.tags.removeTagInstance);
    });

};
