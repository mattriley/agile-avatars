import mixpanel from 'mixpanel-browser';

export default ({ window, constants }) => () => {

    constants.mixpanelToken && mixpanel.init(constants.mixpanelToken, { debug: constants.isTest });

    return {
        mixpanel,
        date: () => new window.Date(),
        fetch: (...args) => window.fetch(...args),
        random: () => window.Math.random(),
        fileReader: () => new window.FileReader()
    };

};
