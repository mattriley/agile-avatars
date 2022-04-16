/* eslint-disable */

export default ({ config, io, window }) => {

    const { trackingId, enabled } = config.gtag;

    const initalise = () => {
        window.dataLayer = [];
        window[`ga-disable-${trackingId}`] = !enabled;
        gtag('js', io.date());
        gtag('config', trackingId);
    }

    function gtag() {
        if (!window.dataLayer) initalise();
        window.dataLayer.push(arguments);
    }

    return gtag;

};
