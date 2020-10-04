/* eslint-disable */

module.exports = ({ config, io, window }) => {

    const { trackingId, enabled } = config.googleAnalytics;

    window.dataLayer = [];
    function gtag () { window.dataLayer.push(arguments); } 
    gtag('js', io.date());
    gtag('config', trackingId);
    window.gtag = gtag;
    window[`ga-disable-${trackingId}`] = !enabled;
    return gtag;
    
};
