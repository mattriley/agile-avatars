module.exports = ({ config, stores }) => {

    return config.storage.settings.reduce((acc, name) => {
        const defaults = config.defaultSettings[name];
        const id = stores.settings.insert(defaults);
        const entry = { [name]: stores.settings.manage(id) };
        return Object.assign(acc, entry);
    }, {});
    
};
