module.exports = ({ el, config }) => () => {

    const { trackingId } = config.gtag;
    
    return el('script', {
        src: `https://www.googletagmanager.com/gtag/js?id=${trackingId}`
    });
    
};
