/* eslint-disable */

module.exports = ({ config, window }) => {

    const { date, trackingId, enabled } = config.googleAnalytics;

    window.dataLayer = [];
    function gtag () { window.dataLayer.push(arguments); } 
    gtag('js', date);
    gtag('config', trackingId);
    window.gtag = gtag;
    window[`ga-disable-${trackingId}`] = !enabled;
    const script = window.document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;

    window.document.body.append(script);

    return gtag;
    
};
