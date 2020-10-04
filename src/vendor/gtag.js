/* eslint-disable */

module.exports = ({ config, io, window }) => {

    const { trackingId, enabled } = config.googleAnalytics;

    const initalise = () => {
        window.dataLayer = [];
        window[`ga-disable-${trackingId}`] = !enabled;
        gtag('js', io.date());
        gtag('config', trackingId);        
    }

    function gtag () { 
        if (!window.dataLayer) initalise();
        window.dataLayer.push(arguments); 
    } 
    
    return gtag;
    
};
