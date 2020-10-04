/* eslint-disable */

module.exports = ({ config, window }) => {

    const { date, trackingId, enabled } = config.googleAnalytics;

    window.dataLayer = [];
    function gtag () { window.dataLayer.push(arguments); } 
    gtag('js', date);
    gtag('config', trackingId);
    window.gtag = gtag;
    window[`ga-disable-${trackingId}`] = !enabled;
    return gtag;
    
};
