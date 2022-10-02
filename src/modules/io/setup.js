import mixpanel from 'mixpanel-browser';

export default ({ window, config }) => () => {

    config.mixpanelToken && mixpanel.init(config.mixpanelToken, { debug: config.isTest });

    return {
        mixpanel,
        date: () => new window.Date(),
        fetch: (...args) => window.fetch(...args),
        random: () => window.Math.random(),
        fileReader: () => new window.FileReader()
    };

};
