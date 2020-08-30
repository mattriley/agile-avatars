/* eslint-disable */

module.exports = ({ window, elements }) => ({ date, trackingId, enabled }) => {

    window.dataLayer = [];
    function gtag () { window.dataLayer.push(arguments); } 
    gtag('js', date);
    gtag('config', trackingId);
    window.gtag = gtag;
    window[`ga-disable-${trackingId}`] = !enabled;
    const src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    return elements.el('script', { src });
    
};
